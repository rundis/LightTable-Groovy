package lt.gradle

import groovy.json.JsonBuilder
import spock.lang.Specification
import spock.util.concurrent.BlockingVariable

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

    def "get task list"() {
        when:
        def tasks = projectCon.tasks

        then:
        tasks.size() == 23
        listener.events
    }


    def "execute tasks"() {
        given:
        def res = new BlockingVariable<Map>(1000)

        when:
        projectCon.execute(tasks: ["build"]) { Map result ->
            res.set result
        }


        then:
        res.get().status == "OK"

    }

    def "test that project info is jsonifyable"() {
        when:
        def projectInfo = [
            dependencies: projectCon.getDependencies("COMPILE"),
            tasks: projectCon.tasks
        ]

        def str = new JsonBuilder(projectInfo).toString()

        then:
        str


    }



}
