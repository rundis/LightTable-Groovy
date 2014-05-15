package lt.groovy


class ClientSessions {
    private final Map<Integer, Map> bindingSession = [:]


    synchronized put(Integer clientId, Map bindingVars) {
        bindingSession.put(clientId, bindingVars)
    }

    synchronized get(Integer clientId) {
        bindingSession.get(clientId)?: [:]
    }

    synchronized clear(Integer clientId) {
        bindingSession.remove(clientId)
    }

}
