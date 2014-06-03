package sample

import spock.lang.Specification

class DummySpec extends Specification {

    def "a placeholder test"() {
        when:
        def a = 100

        then:
        a == 100
    }
}
