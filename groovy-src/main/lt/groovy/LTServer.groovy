package lt.groovy

import lt.gradle.ProgressReporter
import lt.gradle.ProjectConnection
import lt.groovy.commands.CommandDispatcher
import lt.groovy.commands.ProjectInfoCommand
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class LTServer {
    static Logger logger = LoggerFactory.getLogger(LTServer)
    final LTConnection ltCon
    final ScriptExecutor scriptExecutor
    final ClientSessions clientSessions = new ClientSessions()

    ProjectConnection projectConnection

    LTServer(Map params) {
        ltCon = params.ltCon
        scriptExecutor = new ScriptExecutor()
        projectConnection = params.projectConnection
    }

    def sendProjectInfo() {
        new ProjectInfoCommand(
                ltConnection: ltCon,
                projectConnection: projectConnection).execute()
    }

    def startRequestHandling() {
        def dispatcher = new CommandDispatcher(
                projectConnection: projectConnection,
                ltConnection: ltCon,
                clientSessions: clientSessions
        )

        ltCon.sock.withStreams { input, output ->
            try {
                input.eachLine { line ->
                    logger.info "A command : $line"
                    dispatcher.dispatch(line)
                }
            } catch (Exception e) {
                logger.error "Error reading from socket inputstream", e
                System.exit(1)
            }
        }
    }

    static void main(String[] args) {
        logger.info "Connecting to server with args: $args"
        if (!args) {
            println "You must provide port and clientId for lighttable"
            System.exit(1)
        }

        def ltPort = args[0].toInteger()
        def clientId = args[1].toInteger()
        def projectDir = args[2]

        def ltCon = LTConnection.connect(clientId, ltPort)

        ProjectConnection projectConnection = null
        if (projectDir && projectDir.trim() != "null") {
            projectConnection = ProjectConnection.connect(
                    new File(sanitizePath(projectDir)),
                    new ProgressReporter(ltCon))
        }

        def ltServer = new LTServer(
                ltCon: ltCon,
                projectConnection: projectConnection
        )

        // notify client
        ltCon.sendData(
                [
                        name       : "Groovy",
                        "client-id": clientId,
                        dir        : new File("").absolutePath,
                        commands   : ["editor.eval.groovy", "editor.clear.groovy", "gradle.connect", "gradle.execute"],
                        type       : "groovy"
                ]
        )

        println "Connected" // tells lighttable we're good

        if (projectConnection) {
            ltServer.sendProjectInfo()
        }



        ltServer.startRequestHandling()
    }


    private static sanitizePath(String path) {
        if (File.separator == "/") {
            path.replaceAll("\\\\ ", " ")
        } else {
            path
        }
    }
}
