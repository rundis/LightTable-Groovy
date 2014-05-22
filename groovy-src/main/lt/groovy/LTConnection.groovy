package lt.groovy

import groovy.json.JsonBuilder
import groovy.transform.Synchronized
import org.slf4j.Logger
import org.slf4j.LoggerFactory


class LTConnection {
    static Logger logger = LoggerFactory.getLogger(LTConnection)

    final Socket sock
    final Integer clientId

    private LTConnection(Socket sock, Integer clientId) {
        this.sock = sock
        this.clientId = clientId
    }

    static LTConnection connect(Integer clientId, Integer port) {
        def sock = new Socket("127.0.0.1", port)
        new LTConnection(sock, clientId)
    }

    @Synchronized
    void sendData(data) {
        logger.info "Before json: " + data
        def json = new JsonBuilder(data).toString() + "\n"
        logger.info "Sending data til LT: " + json
        sock << json
    }

    @Synchronized
    void close() {
        sock.close()
    }

}
