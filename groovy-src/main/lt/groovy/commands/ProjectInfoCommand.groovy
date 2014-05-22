package lt.groovy.commands

import lt.gradle.ProjectConnection
import lt.groovy.LTConnection
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class ProjectInfoCommand {
    static Logger logger = LoggerFactory.getLogger(ProjectInfoCommand)
    ProjectConnection projectConnection
    LTConnection ltConnection


    void execute() {
        logger.info "Retrieving project information"
        def projectInfo = [
                dependencies: projectConnection.getDependencies("COMPILE"),
                tasks: projectConnection.tasks
        ]

        ltConnection.sendData([null, "gradle.projectinfo", projectInfo])
    }
}
