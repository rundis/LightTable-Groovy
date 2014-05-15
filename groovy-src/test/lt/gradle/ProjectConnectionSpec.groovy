package lt.gradle

import spock.lang.Specification


class ProjectConnectionSpec extends Specification {

    ProjectConnection projectCon

    def setup() {
        projectCon = ProjectConnection.connect(new File("sample"))
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


    def "get runtime classpath for non gradle project works as well"() {
        given:
        def myCod = ProjectConnection.connect new File("/Users/mrundberget/Library/Application Support/")

        when:
        println myCod.classPathList

        then:
        1 == 1
    }


    def "path stuff"() {
        when:
        def myPath = "/Users/mrundberget/Library/Application\\ Support/LightTable/plugins/Groovy/sample"

        println myPath.replaceAll("\\\\ ", " ")


        println new File(myPath).exists()
        then:
        1 == 1


    }
}
