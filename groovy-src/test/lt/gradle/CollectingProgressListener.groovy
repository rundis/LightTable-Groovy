package lt.gradle

import org.gradle.tooling.ProgressEvent
import org.gradle.tooling.ProgressListener


class CollectingProgressListener implements LTProgressReporter {
    List<String> events = []

    @Override
    void statusChanged(ProgressEvent event) {
        events << event.description
    }

    @Override
    void reportProgress(String message) {
        events << message
    }
}
