package lt.gradle

import groovy.json.JsonBuilder
import org.gradle.tooling.GradleConnectionException
import spock.lang.Specification
import spock.util.concurrent.BlockingVariable

/**
 * 
 * Test of syntactically not correct gradle build file.
 * Uses gradle sample 002.
 *
 */
class FailingGradleBuildSpec extends Specification {
    ProjectConnection projectCon
    CollectingProgressListener listener


    def setup() {
        listener = new CollectingProgressListener()
		projectCon = ProjectConnection.connect(new File("samples/gradle/002"), listener)
    }

    def cleanup() {
        projectCon.close()
    }
	
	def "fail on syntactically incorrect gradle build"() {
		when:
			def classPathList = projectCon.classPathList
			
		then:
		 	RuntimeException e = thrown()
			e.message =~  /^Error getting model for project:/
		
	}

    
}
