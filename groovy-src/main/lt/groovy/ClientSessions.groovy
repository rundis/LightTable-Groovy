package lt.groovy


class ClientSessions {
    private final Map<Integer, Map> bindingSession = [:]


    synchronized put(Integer clientId, Binding binding) {
        Map variables = binding.variables
        variables.remove("out")
        bindingSession.put(clientId, variables)
    }

    synchronized get(Integer clientId) {
        bindingSession.get(clientId)?: [:]
    }

}
