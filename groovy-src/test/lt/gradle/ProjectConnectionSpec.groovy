package lt.gradle

import spock.lang.Specification

class ProjectConnectionSpec extends Specification {
    ProjectConnection projectCon
    CollectingProgressListener listener


    def setup() {
        listener = new CollectingProgressListener()
        projectCon = ProjectConnection.connect(new File("sample"), listener)
    }

    def cleanup() {
        projectCon.close()
    }

    def "get runtime classpath list "() {
        when:
        def classPathList = projectCon.classPathList

        then:
        classPathList.size() == 3
        classPathList[0].contains("groovy-all")
        classPathList[1].contains("groovy-stream")
        classPathList[2].contains("sample/build/classes/main")
    }

    def "check progress listener"() {
        when:
        projectCon.classPathList

        then:
        listener.events
    }



}
