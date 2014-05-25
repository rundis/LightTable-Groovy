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
            ltConnection.sendData([
                    null,
                    result.status == "ERROR" ? "gradle.execute.err" : "gradle.execute.success",
                    result
            ])


        }

    }
}
