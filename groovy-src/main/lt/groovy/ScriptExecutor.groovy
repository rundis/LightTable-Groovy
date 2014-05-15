package lt.groovy

import org.codehaus.groovy.control.CompilerConfiguration
import org.codehaus.groovy.control.MultipleCompilationErrorsException
import org.codehaus.groovy.control.customizers.ASTTransformationCustomizer
import org.codehaus.groovy.control.customizers.ImportCustomizer
import org.codehaus.groovy.runtime.StackTraceUtils


class ScriptExecutor {

    def execute(String scriptText) {
        execute(scriptText, [:])
    }

    def execute(String scriptText, Map bindings) {

        def encoding = 'UTF-8'
        def stream = new ByteArrayOutputStream()
        def printStream = new PrintStream(stream, true, 'UTF-8')

        def stacktrace = new StringWriter()
        def errWriter = new PrintWriter(stacktrace)

        def aBinding = new Binding(bindings + [out: printStream])

        def emcEvents = []
        def listener = { MetaClassRegistryChangeEvent event ->
            emcEvents << event
        } as MetaClassRegistryChangeEventListener

        GroovySystem.metaClassRegistry.addMetaClassRegistryChangeEventListener listener

        def originalOut = System.out
        def originalErr = System.err

        System.setOut(printStream)
        System.setErr(printStream)

        def shell = createShell()
        def result = ""
        def errLine = scriptText.readLines().size()
        def script
        try {
            script = shell.parse(scriptText)
            script.binding = aBinding
            result = script.run()
        } catch (MultipleCompilationErrorsException e) {
            stacktrace.append(e.message - 'startup failed, Script1.groovy: ')
        } catch (Throwable t) {
            StackTraceUtils.deepSanitize(t)
            errLine = findErrLineNum(t, errLine)
            t.printStackTrace(errWriter)
        } finally {
            System.setOut(originalOut)
            System.setErr(originalErr)

            GroovySystem.metaClassRegistry.removeMetaClassRegistryChangeEventListener listener
            emcEvents.each { MetaClassRegistryChangeEvent event ->
                GroovySystem.metaClassRegistry.removeMetaClass event.classToUpdate
            }
        }

        def errMsg = stacktrace.toString()
        [
                result: result == null ? "" : result.toString(),
                out: stream.toString(encoding),
                err: errMsg ? [msg: errMsg, line: errLine] : null,
                bindings: extractBindingVars(script),
                exprValues: script?.hasProperty("values_") ? script?.values_ : []
        ]
    }

    private GroovyShell createShell() {
        def transform = new ScriptTransform()
        def conf = new CompilerConfiguration()
        conf.addCompilationCustomizers(new ASTTransformationCustomizer(transform))


        def ic = new ImportCustomizer()
        ic.addImports("groovy.transform.Field")
        conf.addCompilationCustomizers(ic)


        // TODO : should be a parameter
        //conf.setClasspathList(ClassLoader.systemClassLoader.URLs.collect{it.path})


        new GroovyShell(conf)
    }


    private Map extractBindingVars(Script script) {
        if(!script) return [:]

        Map vars = script.binding.variables.findAll {it.key != "out"} +
            extractFields(script) +
            extractMethodsAsClosures(script)


        //println vars
        vars
    }

    private Map extractFields(Script script) {
        script.class.declaredFields.findAll { !it.synthetic }.collectEntries {
            [ (it.name):script."$it.name" ]
        }
    }

    private Map extractMethodsAsClosures(Script script) {
        script.metaClass.methods.findAll {
            it.declaringClass.name == "Script1" && it.name != "run" && !it.static
        }.collectEntries {
            [(it.name):script.&"$it.name"]
        }
    }




    private Integer findErrLineNum(Throwable t, numLinesInScript) {
        def lineNo = Math.min(t.stackTrace.find{it.lineNumber}?.lineNumber?:numLinesInScript, numLinesInScript)
        lineNo > 0 ? lineNo : numLinesInScript
    }
}
