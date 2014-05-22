package lt.gradle

import lt.groovy.LTConnection
import org.gradle.tooling.ProgressEvent

class ProgressReporter implements LTProgressReporter {
    final LTConnection ltCon

    ProgressReporter(LTConnection ltCon) {
        this.ltCon = ltCon
    }

    @Override
    void statusChanged(ProgressEvent event) {
        if (event.description?.trim()) {
            reportProgress(event.description)
        }
    }

    void reportProgress(String message) {
        ltCon.sendData([
            null,
            "gradle.progress",
            [msg: message]
        ])
    }

}
