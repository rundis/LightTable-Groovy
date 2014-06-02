package sample

import spock.lang.Specification

class Dummy02Spec extends Specification {

    def "a placeholder test"() {
        when:
        def a = 100

        then:
        a == 100
    }
}
