package lt.groovy;

import org.codehaus.groovy.ast.AnnotatedNode;
import org.codehaus.groovy.ast.ClassCodeExpressionTransformer;
import org.codehaus.groovy.ast.MethodNode;
import org.codehaus.groovy.ast.expr.*;
import org.codehaus.groovy.control.SourceUnit;

import java.util.HashSet;
import java.util.Set;

/**
 * Inspired by https://github.com/jimwhite/TransformationSandbox
 *
 */
public class ScriptVisitor  extends ClassCodeExpressionTransformer {

    final SourceUnit sourceUnit;

    // Keep track of which lines already have collected values for expressions.
    Set<Integer> collectedLines = new HashSet<Integer>();

    public ScriptVisitor(SourceUnit sourceUnit) {
        this.sourceUnit = sourceUnit;
    }

    @Override
    protected SourceUnit getSourceUnit() {
        return sourceUnit;
    }

    @Override
    public void visitMethod(MethodNode node) {
        if (node.isScriptBody()) super.visitMethod(node);
    }

    @Override
    public void visitAnnotations(AnnotatedNode node) {
        // No sense in looking for trouble...
    }

    /**
     * Don't treat the LHS of a declaration as something we can wrap, just the RHS.
     *
     * @param expression
     */
    @Override
    public void visitDeclarationExpression(DeclarationExpression expression) {
        expression.getRightExpression().visit(this);
    }

    /**
     * Transform an expression by wrapping it in a logging method call, but only
     * if we're the first (highest level) expression to try and log on this line.
     *
     * @param exp the expression to transform
     * @return the transformed expression
     */
    @Override
    public Expression transform(Expression exp) {
        Integer lineNumber = exp.getLineNumber();
        return collectedLines.add(lineNumber) ? collectingExpression(lineNumber, exp) : super.transform(exp);
    }

    /**
     * Wrap the given expression with a collecting method call.  Some kinds of expressions don't
     * like being wrapped in a simple fashion and so we have to handle them specially.
     * The ExpressionTransformer doesn't have methods for each type so we check for each one here.
     *
     * TODO: There are potentially other expressions which need special handling (like indexing and variables).
     * This code may be working because those types have their parent being wrapped
     * and we don't transform their children.
     *
     * @param lineNumber line number to report for this value
     * @param expression the expression whose value we want to report
     * @return an expression that computes the value and also reports it somewheres
     */
    private Expression collectingExpression(Integer lineNumber, Expression expression) {
        if (expression instanceof DeclarationExpression) {
            DeclarationExpression declarationExpression = (DeclarationExpression) expression;

            return new DeclarationExpression(declarationExpression.getLeftExpression()
                    , declarationExpression.getOperation()
                    , collectingExpression(lineNumber, declarationExpression.getRightExpression()));
        }

        if (expression instanceof BooleanExpression) {
            BooleanExpression booleanExpression = (BooleanExpression) expression;
            return new BooleanExpression(new MethodCallExpression(
                    new VariableExpression("this")
                    , "_collect"
                    , new ArgumentListExpression(new ConstantExpression(lineNumber), booleanExpression.getExpression())));
        }

        return new MethodCallExpression(
                new VariableExpression("this")
                , "_collect"
                , new ArgumentListExpression(new ConstantExpression(lineNumber), expression));
    }

}
