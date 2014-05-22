package lt.groovy.commands

import lt.gradle.ProjectConnection
import lt.groovy.LTConnection
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class GradleExecuteCommand {
    Logger logger = LoggerFactory.getLogger(GradleExecuteCommand)
    ProjectConnection projectConnection
    LTConnection ltConnection
    Map params

    void execute() {
        projectConnection.execute(params) {Map result ->
            if(result.status == "ERROR") {
                logger.error "Error executing tasks with params: $params", result.failure
            }
            // TODO: deserves special mention ...
            // errors should be shown in Light Table etc
            projectConnection.listener.reportProgress("Gradle task(s) result: " + result.status)
        }

    }
}
