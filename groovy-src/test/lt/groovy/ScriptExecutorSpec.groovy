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
        results.exprValues == [[value: null, line: 2], [value: 1, line: 3]]
        !results.err
        results.result == "1"
    }

    def "exceptions returned as return value"() {
        when:
        def code = "throw new RuntimeException('Pearshape')"
        def results = executor.execute(code)

        then:
        results.err.contains("RuntimeException")
    }

}
