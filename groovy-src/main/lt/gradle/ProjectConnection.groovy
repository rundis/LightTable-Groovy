package lt.gradle

import org.gradle.tooling.GradleConnectionException
import org.gradle.tooling.GradleConnector
import org.gradle.tooling.ResultHandler
import org.gradle.tooling.model.GradleProject
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
    final LTProgressReporter listener

    IdeaProject ideaProject
    GradleProject gradleProject

    List<String> getClassPathList() {
        getDependencies("COMPILE").file + [new File(projectDir, "build/classes/main").path]
    }

    List<Map> getTasks() {
        gradleProject().tasks.collect{
            [
                name: it.name,
                displayName: it.displayName,
                description: it.description,
                path: it.path
            ]
        }
    }

    def execute(Map params, Closure onComplete) {
        def resultHandler = [
            onComplete: {Object result ->
                onComplete status: "OK"
            },
            onFailure: {GradleConnectionException failure ->
                onComplete status: "ERROR", error: failure
            }
        ] as ResultHandler


        con.newBuild()
            .addProgressListener(listener)
            .forTasks(params.tasks as String[])
            .run(resultHandler)
    }

    def close() {
        con.close()
    }

    private GradleProject gradleProject() {
        if(!this.gradleProject) {
            logger.info "Retrieving gradle model for project: " + projectDir
            listener.reportProgress("Retrieve gradle model")
            this.gradleProject = con.model(GradleProject)
                .addProgressListener(listener)
                .get()
            listener.reportProgress("Gradle model retrieved")
        }
        this.gradleProject
    }

    private ideaProject() {
        if (!this.ideaProject) {
            try {
                logger.info "Retrieving idea model for project: " + projectDir
                listener.reportProgress("Retrieve gradle model")
                this.ideaProject = con.model(IdeaProject)
                    .addProgressListener(listener)
                    .get()
                listener.reportProgress("Finished retrieving gradle model")
            } catch (Exception e) {
                throw new RuntimeException("Error getting model for project: " + projectDir, e)
            }
        }
        this.ideaProject

    }

    List<Map> getDependencies(String scope) {
        ideaProject()
                .children
                .dependencies
                .flatten()
                .findAll { it.scope.scope == scope }
                .collect {
            [
                    name   : it.gradleModuleVersion?.name,
                    group  : it.gradleModuleVersion?.group,
                    version: it.gradleModuleVersion?.version,
                    file   : it.file?.path,
                    source : it.source?.path,
                    javadoc: it.javadoc?.path
            ]
        }
    }


    private ProjectConnection(
            org.gradle.tooling.ProjectConnection con,
            File projectDir,
            LTProgressReporter progressReporter) {
        this.con = con
        this.projectDir = projectDir
        this.listener = progressReporter
    }

    static def connect(File projectDir, LTProgressReporter progressReporter) {
        GradleConnector connector = GradleConnector.newConnector()
                .forProjectDirectory(projectDir)
        def con = connector.connect();
        logger.info "Connected to : " + projectDir

        new ProjectConnection(con, projectDir,progressReporter)
    }
}
