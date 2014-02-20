package lt.groovy

import org.codehaus.groovy.control.CompilerConfiguration
import org.codehaus.groovy.control.customizers.ASTTransformationCustomizer
import spock.lang.Specification


class CollectSpec extends Specification {
    def shell
    def transform

    def setup() {
        transform = new ScriptTransform()

        def conf = new CompilerConfiguration()
        conf.addCompilationCustomizers(new ASTTransformationCustomizer(transform))
        shell = new GroovyShell(conf)
    }



    def "printlns return 0" () {
        when:
        def code = "println 'hello'"
        def script = shell.parse(code)
        def retVal = script.run()

        then:
        !retVal
        script.values_  == [[value:null, line:1]]

    }
}
