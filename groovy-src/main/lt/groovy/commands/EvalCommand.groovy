package lt.groovy.commands

import lt.gradle.ProjectConnection
import lt.groovy.ClientSessions
import lt.groovy.LTConnection
import lt.groovy.ScriptExecutor
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class EvalCommand {
    Logger logger = LoggerFactory.getLogger(EvalCommand)

    ScriptExecutor scriptExecutor = new ScriptExecutor()
    ProjectConnection projectConnection
    LTConnection ltConnection
    ClientSessions clientSessions
    Integer currentClientId
    Object data

    void execute() {
        def evalResult = scriptExecutor.execute(
            script: data.code,
            bindings: clientSessions.get(currentClientId),
            classPathList: projectConnection ? projectConnection.runtimeClasspath : [])
        clientSessions.put(currentClientId, evalResult.bindings)

        logger.info "Eval results: $evalResult"

        def resultParams = [meta: data.meta]
        if (evalResult.out) {
            resultParams << [out: evalResult.out]
        }
        if(evalResult.exprValues) {
            resultParams << [result: convertToClientVals(evalResult.exprValues)]
        }

        if (!evalResult.err) {
            data = [currentClientId?.toInteger(), "groovy.res", resultParams]
        } else {
            data = [currentClientId?.toInteger(), "groovy.err", [ex: evalResult.err] + resultParams]
        }
        ltConnection.sendData data
    }

    private List convertToClientVals(List values) {
        def limitVals = {List vals ->
            vals.size() < 10 ? vals : vals.take(9) + [value: "..."] + vals.last()
        }

        values.groupBy {it.line}.inject([]) {acc, val ->
            acc + [line: val.key, values: limitVals(val.value).value]
        }
    }

}
