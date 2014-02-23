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
        entry.put("value", safeVal(value));
//         entry.put("value", value);
        _values.add(entry);
        return value;
    }
 
    String safeVal(Object it) {
       if (it != null) {
           return it.toString();
       } else {
           return "null";
       }
    }
    
    public List<Map> getValues_() {
        return _values;
    }
}
