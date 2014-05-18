package lt.groovy

import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import lt.gradle.ProjectConnection
import org.codehaus.groovy.runtime.StackTraceUtils


class LTServer {
    final boolean loggingEnabled
    final Integer ltPort
    final Integer clientId
    final File logFile = new File("lt_groovy.log")
    final Socket ltClient
    final ScriptExecutor scriptExecutor
    final ClientSessions clientSessions = new ClientSessions()

    ProjectConnection projectConnection

    LTServer(Map params) {
        loggingEnabled = params.loggingEnabled
        ltPort = params.ltPort
        clientId = params.clientId
        ltClient = params.ltClient
        scriptExecutor = new ScriptExecutor()
        projectConnection = params.projectConnection
    }

    def log(msg) {
        if (loggingEnabled) {
            logFile << "${new Date().format('dd.MM.yyyy HH:mm sss')} - $msg\n"
        }
    }

    def sendData(data) {
        def json = new JsonBuilder(data).toString() + "\n"
        log "Sending json to LT: $json"
        ltClient << json
    }

    def startRequestHandling() {
        ltClient.withStreams { input, output ->
            try {
                input.eachLine { line ->
                    log "A command : $line"
                    def (currentClientId, command, data) = new JsonSlurper().parseText(line)

                    switch (command) {
                        case "client.close":
                            stop()
                            break
                        case "editor.eval.groovy":
                            evalGroovy(data, currentClientId)
                            break
                        case "editor.clear.groovy":
                            clientSessions.clear(currentClientId)
                            log "Clearing bindings for client: $currentClientId"
                            break;
                        case "gradle.connect":
                            connectProject(data)
                            break;
                        default:
                            log "Invalid command: $command"
                    }

                }
            } catch (Exception e) {
                StackTraceUtils.deepSanitize(e)
                def stacktrace = new StringWriter()
                def errWriter = new PrintWriter(stacktrace)
                e.printStackTrace(errWriter)

                log "Error reading from socket inputstream: ${stacktrace.toString()}"
                e.printStackTrace()
                System.exit(1)
            }
        }


    }

    private void evalGroovy(data, currentClientId) {
        def evalResult = scriptExecutor.execute(
                script: data.code,
                bindings: clientSessions.get(currentClientId),
                classPathList: projectConnection ? projectConnection.classPathList : [])
        clientSessions.put(currentClientId, evalResult.bindings)

        log "Eval results: $evalResult"

        def resultParams = [meta: data.meta]
        if (evalResult.out) {
            resultParams << [out: evalResult.out]
        }
        if(evalResult.exprValues) {
            resultParams << [result: convertToClientVals(evalResult.exprValues)]
        }

        if (!evalResult.err) {
            data = [currentClientId?.toInteger(), "groovy.res", resultParams]
        } else {
            data = [currentClientId?.toInteger(), "groovy.err", [ex: evalResult.err] + resultParams]
        }
        sendData data
    }

    private List convertToClientVals(List values) {
        def limitVals = {List vals ->
            vals.size() < 10 ? vals : vals.take(9) + [value: "..."] + vals.last()
        }

        values.groupBy {it.line}.inject([]) {acc, val ->
            acc + [line: val.key, values: limitVals(val.value).value]
        }
    }

    private def connectProject(data, currentClientId) {
        def retVal = [currentClientId?.id]
        try {
            if(projectConnection) {
                projectConnection.close()
            }
            projectConnection = ProjectConnection.connect(new File(data.projectDir))
            retVal += ["gradle.connected"]

        } catch(Exception e) {
            log "Error connecting to gradle project: " + e.message
            retVal += ["gradle.connect.err", [ex: e.message]]
        }

        sendData(retVal)
    }

    def stop() {
        log "Bye bye !"
        try {
            ltClient.close()
            projectConnection?.close()
        } catch (Exception e) {
            log "Failed to close client connection, will exit anyway: $e"
        }
        System.exit(0)
    }



    static void main(String[] args) {
        if(!args) {
            println "You must provide port and clientId for lighttable"
            System.exit(1)
        }

        def ltPort = args[0].toInteger()
        def clientId = args[1].toInteger()
        def projectDir = args[2]
        def loggingEnabled = true //System.getenv()["LT_GROOVY_LOG"]?.toBoolean() ?: false


        def ltClient
        try {
            ltClient = new Socket("127.0.0.1", ltPort)
        } catch (Exception e) {
            e.printStackTrace()
            throw e
        }

        ProjectConnection projectConnection = null
        if(projectDir && projectDir.trim() != "null") {
            projectConnection = ProjectConnection.connect(new File(sanitizePath(projectDir)))
        }

        def ltServer = new LTServer(
            loggingEnabled: loggingEnabled,
            ltPort: ltPort,
            clientId: clientId,
            ltClient: ltClient,
            projectConnection: projectConnection
        )

        // notify client
        ltServer.sendData(
            [
                name: "Groovy",
                "client-id": clientId,
                dir: new File("").absolutePath,
                commands: ["editor.eval.groovy", "editor.clear.groovy", "gradle.connect"],
                type: "groovy"
            ]
        )

        println "Connected" // tells lighttable we're good

        ltServer.startRequestHandling()
    }


    private static sanitizePath(String path) {
        if(File.separator == "/") {
            path.replaceAll("\\\\ ", " ")
        } else {
            path
        }
    }
}
