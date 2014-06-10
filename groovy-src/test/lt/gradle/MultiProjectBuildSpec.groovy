package lt.gradle

import groovy.json.JsonBuilder
import org.gradle.tooling.model.idea.IdeaModuleDependency
import spock.lang.Specification
import spock.util.concurrent.BlockingVariable

/**
 * 
 * Test of multiproject build. Hierarchy of build scripts with two subprojects.
 * Uses gradle sample 003.
 *
 */
class MultiProjectBuildSpec extends Specification {
    ProjectConnection projectCon
    CollectingProgressListener listener


    def setup() {
        listener = new CollectingProgressListener()
        projectCon = ProjectConnection.connect(new File("samples/gradle/003"), listener)
    }

    def cleanup() {
        projectCon.close()
    }


    def "get runtime classpath list "() {
        when:
        def classPathList = projectCon.runtimeClasspath

        then:
        classPathList.size() == 3
    }

    def "get task list"() {
        when:
        def tasks = projectCon.tasks

        then:
        tasks.size() == 98
        listener.events
    }


    def "execute sub tasks 01"() {
        given:
        def res = new BlockingVariable<Map>(1000)
		def cf = new File("samples/gradle/003/sub01/build/classes/main/sample/Dummy01.class")
		if (cf.exists()) {
			cf.delete()
		}

        when:
        projectCon.execute(tasks: [":sub01:build"]) { Map result ->
            res.set result
        }


        then:
        res.get().status == "OK"
		cf.exists()

    }

	def "execute sub tasks 02"() {
		given:
		def res = new BlockingVariable<Map>(1000)
		def cf = new File("samples/gradle/003/sub02/build/classes/main/sample/Dummy02.class")
		if (cf.exists()) {
			cf.delete()
		}
		
		when:
		projectCon.execute(tasks: [":sub02:build"]) { Map result ->
			res.set result
		}


		then:
		res.get().status == "OK"
		cf.exists()

	}
	
	def "execute sub tasks by name"() {
		given:
		def res = new BlockingVariable<Map>(1000)
		def cf01=new File("samples/gradle/003/sub01/build/classes/main/sample/Dummy01.class")
		def cf02=new File("samples/gradle/003/sub02/build/classes/main/sample/Dummy02.class")
		if (cf01.exists()) {
			cf01.delete()
		}
		if (cf02.exists()) {
			cf02.delete()
		}

		when:
		projectCon.execute(tasks: ["build"]) { Map result ->
			res.set result
		}


		then:
		res.get().status == "OK"
		cf01.exists()
		cf02.exists()
		
	}

    def "get root dependencies "() {
        when:
        def rootDeps = projectCon.rootDependencies

        then:
        rootDeps.configurations.size() == 7
        listener.events.size() > 2
    }


    def "get subproject dependencies"() {
        when:
        def subProjectDeps = projectCon.subProjectDependencies

        println subProjectDeps

        then:
        subProjectDeps.size() == 2



    }


    def "test that project info is jsonifyable"() {
        when:
        def projectInfo = [
            rootDependencies: projectCon.rootDependencies,
            subDependencies: projectCon.subProjectDependencies,
            tasks: projectCon.tasks
        ]

        def str = new JsonBuilder(projectInfo).toString()

        then:
        str
    }
}
