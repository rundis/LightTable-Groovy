package lt.gradle

import spock.lang.Specification

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
			projectCon.runtimeClasspath
			
		then:
		 	RuntimeException e = thrown()
			e.message.contains("Error getting generic model for project:")
		
	}

    
}
