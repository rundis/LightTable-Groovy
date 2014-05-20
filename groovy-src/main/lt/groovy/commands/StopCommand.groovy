package lt.groovy.commands

import lt.gradle.ProjectConnection
import lt.groovy.LTConnection
import org.slf4j.Logger
import org.slf4j.LoggerFactory


class StopCommand {
    static Logger logger = LoggerFactory.getLogger(StopCommand)
    ProjectConnection projectConnection
    LTConnection ltConnection

    void execute() {
        logger.info "Bye bye !"
        try {
            ltConnection.close()
            projectConnection?.close()
        } catch (Exception e) {
            logger.error "Failed to close client connection, will exit anyway.", e
        }
        System.exit(0)
    }
}
