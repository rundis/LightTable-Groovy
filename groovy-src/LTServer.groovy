//@Grab( 'io.netty:netty-all:4.0.15.Final' )
import groovy.json.*



  logFile = new File("server.log")

def log(msg) {
  logFile << "${new Date().format('dd.MM.yyyy mm:hh:sss')} - $msg\n"
}


log "New connection"

client = null
try {
  client = new Socket("127.0.0.1", args[0].toInteger())
} catch (Exception e) {
  log "Could not connect to port: ${args[0]}"
  println "Error when connecting to port: ${args[0]}"
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
    "client-id": args[1].toInteger(),
    dir: new File("").absolutePath,
    commands: ["editor.eval.groovy"],
    type: "groovy"
  ]
)


log "notified client !"


println "Connected" // tells lighttable we're good


//binding = new Binding();
//shell = new GroovyShell(binding)


client.withStreams {input, output ->
  while(true) {
    try {
      input.eachLine {line ->
        log "A Line! : $line"

        data = new JsonSlurper().parseText(line)


        if(data[1] == "client.close") {
          log "Bye bye !"

          try {
            client.close()
          } catch (Exception e) { log "Failed to close client connection, will exit anyway: $e" }
          System.exit(0)
        } else {


          try {
            log "Skal til aa evaluere kode naa"
            log "The shit: ${data[2].code}"
            log "The shit: ${data[2].code.getClass()}"


            log "Ready to do it"
            result = "hello" //shell.evaluate(data[2].code)
            log("Code evaluated ok. Result: $result")
            sendData(
              [args[1].toInteger(), "editor.eval.groovy.result", [result: result, meta: data[2].meta]]
            )



          } catch (Exception e) {
            log "Exception when evaluating: $e"

          }

        }

      }
    } catch (Exception e) {
      log "Error reading from socket inputstream: $e"
    }
  }
}



log "End of the world, should not get here really..."


