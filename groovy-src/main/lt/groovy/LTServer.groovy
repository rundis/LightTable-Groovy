package lt.groovy

import groovy.json.JsonBuilder
import groovy.json.JsonSlurper


class LTServer {
    final boolean loggingEnabled
    final Integer ltPort
    final Integer clientId
    final File logFile = new File("lt_groovy.log")
    final Socket ltClient
    final ScriptExecutor scriptExecutor

    LTServer(Map params) {
        loggingEnabled = true//params.loggingEnabled
        ltPort = params.ltPort
        clientId = params.clientId
        ltClient = params.ltClient
        scriptExecutor = new ScriptExecutor()
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
                        default:
                            log "Invalid command: $command"
                    }

                }
            } catch (Exception e) {
                log "Error reading from socket inputstream: $e"
                e.printStackTrace()
                System.exit(1)
            }
        }


    }

    private void evalGroovy(data, currentClientId) {
        def evalResult = scriptExecutor.execute(data.code)
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
        def safeVal = {
            it?.toString()?.contains("closure") ? it.toString() : it == null ? "null" : it.toString()
        }

        def limitVals = {List vals ->
            if(vals.size() < 10) {
                vals
            } else {
                vals.take(9) + ["..."] + vals.last()
            }
        }

        values.groupBy {it.line}.inject([]) {acc, val ->
            acc += [line: val.key, values: limitVals(val.value).collect{safeVal(it.value)}]
            acc
        }
    }

    def stop() {
        log "Bye bye !"
        try {
            ltClient.close()
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
        def loggingEnabled = System.getenv()["LT_GROOVY_LOG"]?.toBoolean() ?: false

        def ltClient
        try {
            ltClient = new Socket("127.0.0.1", ltPort)
        } catch (Exception e) {
            e.printStackTrace()
            throw e
        }

        def ltServer = new LTServer(
            loggingEnabled: loggingEnabled,
            ltPort: ltPort,
            clientId: clientId,
            ltClient: ltClient
        )

        // notify client
        ltServer.sendData(
            [
                name: "Groovy",
                "client-id": clientId,
                dir: new File("").absolutePath,
                commands: ["editor.eval.groovy"],
                type: "groovy"
            ]
        )

        println "Connected" // tells lighttable we're good
        ltServer.startRequestHandling()
    }
}
