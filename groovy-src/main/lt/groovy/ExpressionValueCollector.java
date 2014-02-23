package lt.groovy;

import groovy.lang.Script;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by mrundberget
 */
abstract public class ExpressionValueCollector extends Script {
    private final List<Map> _values = new ArrayList<Map>();

    public Object _collect(int line, Object value) {
        Map entry = new HashMap();
        entry.put("line", line);
        entry.put("value", value != null ? value.toString() : value);
        _values.add(entry);
        return value;
    }

    public List<Map> getValues_() {
        return _values;
    }
}
