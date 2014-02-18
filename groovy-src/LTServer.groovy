import groovy.json.*


  params = [
    ltPort:   args[0].toInteger(),
    clientId: args[1].toInteger()
  ]


loggingEnabled = System.getenv()["LT_GROOVY_LOG"]?.toBoolean()?: false
logFile = new File("lt_groovy.log")

def log(msg) {
  if(loggingEnabled) { logFile << "${new Date().format('dd.MM.yyyy HH:mm sss')} - $msg\n" }
}
log "New connection. Args: $args"

client = null
try {
  client = new Socket("127.0.0.1", params.ltPort)
} catch (Exception e) {
  log "Could not connect to port: ${params.ltPort}"
  e.printStackTrace()
  throw e
}
log "Connected"


def sendData(data) {
  json = new JsonBuilder(data).toString() + "\n"
  log "Sending json to LT: $json"
  client << json
}


sendData (
  [
    name: "Groovy",
    "client-id": params.clientId,
    dir: new File("").absolutePath,
    commands: ["editor.eval.groovy"],
    type: "groovy"
  ]
)
log "notified client !"
println "Connected" // tells lighttable we're good


client.withStreams {input, output ->
  try {
    input.eachLine {line ->
      log "A command : $line"

      (currentClientId, command, data) = new JsonSlurper().parseText(line)

      switch (command) {
        case "client.close":
          log "Bye bye !"
          try {
            client.close()
          } catch (Exception e) { log "Failed to close client connection, will exit anyway: $e" }
          System.exit(0)
          break

        case "editor.eval.groovy":
          evalResult = ScriptExecutor.execute(data.code)
          log "Eval results: $evalResult"

          resultParams = [meta: data.meta]
          if(evalResult.outputText) { resultParams << [out: evalResult.outputText] }
          if(evalResult.bindings) { resultParams << [bindings: evalResult.bindings] }

          if(!evalResult.stackTrace) {
            data = [currentClientId?.toInteger(), "groovy.res", [result: evalResult.result?:"null"] + resultParams]
          } else {
            data = [currentClientId?.toInteger(), "groovy.err", [ex: evalResult.stackTrace] + resultParams]
          }

          sendData data

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



