package lt.gradle

import org.gradle.tooling.GradleConnector
import org.gradle.tooling.ProgressListener
import org.gradle.tooling.model.idea.IdeaProject
import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * Class that wraps interaction with the Gradle Tooling API
 */
class ProjectConnection {
    static Logger logger = LoggerFactory.getLogger(ProjectConnection.class)

    final org.gradle.tooling.ProjectConnection con
    final File projectDir
    final ProgressListener listener

    IdeaProject project

    List<String> getClassPathList() {
        getDependencies("COMPILE").file.path + [new File(projectDir, "build/classes/main").path]
    }

    def close() {
        con.close()
    }

    private project() {
        if (!this.project) {
            try {
                logger.info "Retrieving model for project: " + projectDir
                this.project = con.model(IdeaProject)
                    .addProgressListener(listener)
                    .get()
            } catch (Exception e) {
                throw new RuntimeException("Error getting model for project: " + projectDir, e)
            }
        }
        this.project

    }

    private List<Map> getDependencies(String scope) {
        project()
                .children
                .dependencies
                .flatten()
                .findAll { it.scope.scope == scope }
                .collect {
            [
                    name   : it.gradleModuleVersion?.name,
                    group  : it.gradleModuleVersion?.group,
                    version: it.gradleModuleVersion?.version,
                    file   : it.file,
                    source : it.source,
                    javadoc: it.javadoc
            ]
        }
    }


    private ProjectConnection(
            org.gradle.tooling.ProjectConnection con,
            File projectDir,
            ProgressListener progressListener) {
        this.con = con
        this.projectDir = projectDir
        this.listener = progressListener
    }

    static def connect(File projectDir, ProgressListener progressListener) {
        GradleConnector connector = GradleConnector.newConnector()
                .forProjectDirectory(projectDir)
        def con = connector.connect();
        logger.info "Connected to : " + projectDir

        new ProjectConnection(con, projectDir,progressListener)
    }
}
