package lt.groovy

import org.codehaus.groovy.control.CompilerConfiguration
import org.codehaus.groovy.control.MultipleCompilationErrorsException
import org.codehaus.groovy.control.customizers.ASTTransformationCustomizer
import org.codehaus.groovy.runtime.StackTraceUtils


class ScriptExecutor {

    def execute(String scriptText) {

        def encoding = 'UTF-8'
        def stream = new ByteArrayOutputStream()
        def printStream = new PrintStream(stream, true, 'UTF-8')

        def stacktrace = new StringWriter()
        def errWriter = new PrintWriter(stacktrace)

        def aBinding = new Binding([out: printStream])

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
            errLine = Math.min(t.stackTrace.find{it.lineNumber}?.lineNumber?: errLine, errLine)
            t.printStackTrace(errWriter)
        } finally {
            System.setOut(originalOut)
            System.setErr(originalErr)

            GroovySystem.metaClassRegistry.removeMetaClassRegistryChangeEventListener listener
            emcEvents.each { MetaClassRegistryChangeEvent event ->
                GroovySystem.metaClassRegistry.removeMetaClass event.classToUpdate
            }
        }

        [
                result: result == null ? "" : result.toString(),
                out: stream.toString(encoding),
                err: stacktrace.toString() ? [msg: stacktrace.toString(), line: errLine] : null,
                bindings: aBinding,
                exprValues: script?.values_
        ]
    }

    private GroovyShell createShell() {
        def transform = new ScriptTransform()
        def conf = new CompilerConfiguration()
        conf.addCompilationCustomizers(new ASTTransformationCustomizer(transform))
        new GroovyShell(conf)
    }
}
