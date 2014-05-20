package lt.groovy.commands

import groovy.json.JsonSlurper
import lt.gradle.ProjectConnection
import lt.groovy.ClientSessions
import lt.groovy.LTConnection
import org.slf4j.Logger
import org.slf4j.LoggerFactory


class CommandDispatcher {
    Logger logger = LoggerFactory.getLogger(CommandDispatcher)

    LTConnection ltConnection
    ProjectConnection projectConnection
    ClientSessions clientSessions

    void dispatch(String line) {
        def (currentClientId, command, data) = new JsonSlurper().parseText(line)
        def cmd = [execute: {}]
        Map defaultParams = [
            ltConnection: ltConnection,
            projectConnection: projectConnection,
            currentClientId: currentClientId,
            clientSessions: clientSessions,
            data: data
        ]

        switch (command) {
            case "client.close":
                cmd = new StopCommand(ltConnection: ltConnection, projectConnection: projectConnection)
                break
            case "editor.eval.groovy":
                cmd = new EvalCommand(ltConnection: ltConnection,
                    projectConnection: projectConnection,
                    currentClientId: currentClientId,
                    clientSessions: clientSessions,
                    data: data)
                break
            case "editor.clear.groovy":
                logger.info "Clearing bindings for client: $currentClientId"
                clientSessions.clear(currentClientId)
                break;
            case "gradle.connect":
                logger.info "Gradle connect command not implemented yet"
                break;
            default:
                logger.warn "Invalid command: $command"
        }

        cmd.execute()
    }
}
