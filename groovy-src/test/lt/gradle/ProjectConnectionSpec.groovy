package lt.gradle

import groovy.json.JsonBuilder
import org.gradle.tooling.model.gradle.BuildInvocations
import spock.lang.Specification
import spock.util.concurrent.BlockingVariable

/**
 * 
 * Test of basic gradle interface.
 * Uses gradle sample 001.
 *
 */
class ProjectConnectionSpec extends Specification {
    ProjectConnection projectCon
    CollectingProgressListener listener


    def setup() {
        listener = new CollectingProgressListener()
        projectCon = ProjectConnection.connect(new File("samples/gradle/001"), listener)
    }

    def cleanup() {
        projectCon.close()
    }

    def "get runtime classpath list "() {
        when:
        def classPathList = projectCon.runtimeClasspath

        then:
        classPathList.size() == 4
        classPathList[0].contains("samples/gradle/001/build/classes/main")
        classPathList[1].contains("samples/gradle/001/build/resources/main")
        classPathList[2].contains("groovy-all")
        classPathList[3].contains("groovy-stream")
    }

    def "check progress listener"() {
        when:
        projectCon.runtimeClasspath

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
		new File("samples/gradle/001/build/classes/main/sample/Dummy.class").exists()

    }

    def "get root dependencies"() {
        when:
        def rootDeps = projectCon.rootDependencies

        then:
        rootDeps.configurations.size() == 7
        rootDeps.configurations.testRuntime.nodes.size() == 5

        listener.events.size() > 2
    }

    def "single project has no subproject deps"() {
        when:
        def subDeps = projectCon.subProjectDependencies

        then:
        !subDeps
    }


}
