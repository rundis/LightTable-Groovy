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



def notifyClient(data) {
  client << new JsonBuilder(data).toString() + "\n"
}


notifyClient (
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


client.withStreams {input, output ->
  while(true) {
    try {
      input.eachLine {line ->
        log "A Line! : $line"

        if(line.contains("client.close")) {
          log "Bye bye !"

          try {
            client.close()
          } catch (Exception e) { log "Failed to close client connection, will exit anyway: $e" }
          System.exit(0)
        }

      }
    } catch (Exception e) {
      log "Error reading from socket inputstream: $e"
    }
  }

}




log "Wtf How did we get here..."







/*def findFreePort() {
ServerSocket socket = null;
try {
socket = new ServerSocket(0)
socket.setReuseAddress(true)
int port = socket.getLocalPort()
socket.close();
return port
} finally {
if (socket != null) {
socket.close();
}
}
throw new IllegalStateException("Could not find a free TCP/IP port to for Lighttable groovy server");
}*/

