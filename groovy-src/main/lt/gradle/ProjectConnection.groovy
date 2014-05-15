package lt.gradle

import org.gradle.tooling.GradleConnector
import org.gradle.tooling.model.idea.IdeaProject

/**
 * Class that wraps interaction with the Gradle Tooling API
 */
class ProjectConnection {
    final org.gradle.tooling.ProjectConnection con
    final File projectDir

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
                this.project = con.getModel(IdeaProject)
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


    private ProjectConnection(org.gradle.tooling.ProjectConnection con, File projectDir) {
        this.con = con
        this.projectDir = projectDir
    }

    static def connect(File projectDir) {
        GradleConnector connector = GradleConnector.newConnector()
                .forProjectDirectory(projectDir)
        def con = connector.connect();
        new ProjectConnection(con, projectDir)
    }
}
