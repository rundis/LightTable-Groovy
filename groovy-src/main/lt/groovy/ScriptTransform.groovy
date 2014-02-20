package lt.groovy

import org.codehaus.groovy.ast.ASTNode
import org.codehaus.groovy.ast.ClassNode
import org.codehaus.groovy.control.CompilePhase
import org.codehaus.groovy.control.SourceUnit
import org.codehaus.groovy.transform.ASTTransformation
import org.codehaus.groovy.transform.GroovyASTTransformation


@GroovyASTTransformation(phase = CompilePhase.SEMANTIC_ANALYSIS)
class ScriptTransform implements ASTTransformation {

    def collectorNode = new ClassNode(ExpressionValueCollector.class)

    public void visit(ASTNode[] astNodes, SourceUnit sourceUnit) {
        def moduleAST = sourceUnit.AST
        String mainClassName = moduleAST.mainClassName
        ClassNode mainClass = moduleAST.classes.find { it.name == mainClassName }

        if (mainClass?.isScript()) {
            mainClass.setSuperClass(collectorNode)
            new ScriptVisitor(sourceUnit).visitClass(mainClass);
        }
    }
}
