package lt.gradle

import lt.groovy.LTConnection
import org.gradle.tooling.ProgressEvent
import org.gradle.tooling.ProgressListener


class ProgressReporter implements ProgressListener {
    final LTConnection ltCon
    Integer clientId


    ProgressReporter(LTConnection ltCon) {
        this.ltCon = ltCon
    }

    @Override
    void statusChanged(ProgressEvent event) {
        if (event.description?.trim()) {

            ltCon.sendData([
                clientId?: ltCon.clientId, //ltCon.clientId,
                "gradle.progress",
                [msg: event.description]
            ])
        }
    }

}
