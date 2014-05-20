package lt.gradle

import org.gradle.tooling.ProgressEvent
import org.gradle.tooling.ProgressListener


class CollectingProgressListener implements ProgressListener{
    List<String> events = []

    @Override
    void statusChanged(ProgressEvent event) {
        events << event.description
    }
}
