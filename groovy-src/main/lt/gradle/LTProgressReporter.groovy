package lt.gradle

import org.gradle.tooling.ProgressListener


public interface LTProgressReporter extends ProgressListener {
    void reportProgress(String message)
}