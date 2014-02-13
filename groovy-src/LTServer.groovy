import groovy.json.*


params = [
  ltPort:   args[0].toInteger(),
  clientId: args[1].toInteger()
]

logFile = new File("server.log")

def log(msg) {
  logFile << "${new Date().format('dd.MM.yyyy mm:hh:sss')} - $msg\n"
}

log("Test : " + ScriptExecutor.execute("println 'hello'"))
log "New connection"

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
  log "Sender json til LT: $json"

  client << new JsonBuilder(data).toString() + "\n"
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
  while(true) {
    try {
      input.eachLine {line ->
        log "A Line! : $line"

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
            /*sendData(
              [currentClientId?.toInteger(), "editor.eval.groovy.result", [result: evalResult.result, meta: data.meta]]
            )*/
            sendData(
              [currentClientId?.toInteger(), "editor.eval.groovy.success", [meta: data.meta]]
            )
            break
          default:
            log "Invalid command: $command"
        }

      }
    } catch (Exception e) {
      log "Error reading from socket inputstream: $e"
    }
  }
  log "Outside try readline... "
  if (client.closed) {
    log "Error socket gone..."
    System.exit(1)
  }
}



log "End of the world, should not get here really..."


