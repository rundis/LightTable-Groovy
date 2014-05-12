package lt.groovy

import spock.lang.Ignore
import spock.lang.Specification


class ScriptExecutorSpec extends Specification {

    ScriptExecutor executor = new ScriptExecutor()

    def "verify simple success with std out"() {
        when:
        def code = """
            println 'hello'
            int i=1
        """

        def results = executor.execute(code)

        then:
        results.out == "hello\n"
        results.exprValues == [[value: "null", line: 2], [value: "1", line: 3]]
        !results.err
        results.result == "1"
    }

    def "exceptions returned as return value"() {
        when:
        def code = "throw new RuntimeException('Pearshape')"
        def results = executor.execute(code)

        then:
        results.err.msg.contains("RuntimeException")
        results.err.line == 1
    }

    def "execute multiple scripts"() {
        when:
        def results = executor.execute("println 'hello'")
        then:
        !results.err

        when:
        results = executor.execute("println 'world'")
        then:
        !results.err
    }

    def "reports illegal script when no main"() {
        when:
        def results = executor.execute("""
            class Dummy {
                String dill
                Integer dall
            }
        """)

        then:
        results.err.msg.contains("No signature of method: Dummy.main()")
        results.err.line == 6
    }

    def "run with simple binding param"() {
        when:
        def bindings = [msg: "Magnus"]
        def results = executor.execute("""
            helloMsg = 'hello ' + msg
            println helloMsg
            """, bindings)
        then:
        results.bindings["helloMsg"] == "hello Magnus"
    }

    def "run with binding param from previous execution"() {
        when:
        def results1 = executor.execute("""
        myDouble = {val -> val*2}
        """)
        def myDouble = results1.bindings["myDouble"]

        def results2 = executor.execute("""
            def dill = myDouble(3)
        """, [myDouble: myDouble])

        then:
        results2.result == "6"
    }

    def "run with binding param, second script defines same"() {
        when:
        def results1 = executor.execute("""
        myDouble = {val -> val*2}
        """)
        def myDouble = results1.bindings["myDouble"]

        def results2 = executor.execute("""
            myDouble = 4
        """, [myDouble: myDouble])

        then:
        results2.result == "4"
        results2.bindings["myDouble"] == 4
    }

    @Ignore
    def "run with calling stuff set in classpath"() {
        when:
        def results = executor.execute("""
        import org.hamcrest.core.*
        dill = new StringContains("Dill").matchesSafely("ill")
        """)

        then:
        !results.err
    }



}
