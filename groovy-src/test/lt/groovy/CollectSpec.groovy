package lt.groovy

import org.codehaus.groovy.control.CompilerConfiguration
import org.codehaus.groovy.control.customizers.ASTTransformationCustomizer
import spock.lang.Specification
import spock.lang.Unroll


class CollectSpec extends Specification {
    def shell
    def transform

    def setup() {
        transform = new ScriptTransform()

        def conf = new CompilerConfiguration()
        conf.addCompilationCustomizers(new ASTTransformationCustomizer(transform))
        shell = new GroovyShell(conf)
    }

    def "printlns return 0"() {
        when:
        def code = "println 'hello'"
        def script = shell.parse(code)
        def retVal = script.run()

        then:
        !retVal
        script.values_ == [[value: null, line: 1]]
    }

    @Unroll()
    def "#statement yields #expectedValues"() {
        when:
        def script = shell.parse(statement)
        script.run()

        then:
        script.values_ == expectedValues

        where:
        statement                       | expectedValues
        "i = 1"                         | [[value: 1, line: 1]]
        "def i = 1"                     | [[value: 1, line: 1]]
        "[1,2,3].collect{it*2}"         | [[value: [2, 4, 6], line: 1]]
        "def (o, p, q) = 'abc' as List" | [[value: ["a", "b", "c"], line: 1]]
    }

    def "if and while fun"() {
        when:
        def code = '''
          y = 2
          while (y--) {
          if (y & 1) {
                y
                println "one statement"
          } else {
                y
                println "another statement"
          }
        }
        '''
        def script = shell.parse(code)
        script.run()

        then:
        script.values_ == [
                [value:2, line:2],
                [value:2, line:3],
                [value:1, line:4],
                [value:1, line:5],
                [value:null, line:6],
                [value:1, line:3],
                [value:0, line:4],
                [value:0, line:8],
                [value:null, line:9],
                [value:0, line:3]
        ]
    }

    def "classes are fine"() {
        when:
        def code = '''
            class Foo {
                def a = 11
                def b = 22
                def c() { a * b }
            }

            new Foo().a * new Foo().b
            new Foo().c() / 2
        '''
        def script = shell.parse(code)
        script.run()

        then:
        script.values_ == [[value:242, line:8], [value:121, line:9]]
    }

    def "We can handle closures"() {
        when:
        def code = '''
            def myDouble = {it*2}
            a = myDouble(2) * myDouble(2)
        '''

        def script = shell.parse(code)
        script.run()

        then:
        script.values_[0].line == 2
        script.values_[0].value.toString().contains("closure")
        script.values_[1] == [value: 16, line: 3]
    }


}
