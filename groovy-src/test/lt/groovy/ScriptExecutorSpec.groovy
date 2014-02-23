package lt.groovy

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
        results.exprValues.toString() == [[value: null, line: 2], [value: 1, line: 3]].toString()
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

}
