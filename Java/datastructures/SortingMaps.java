package datastructures;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;


public class SortingMaps {
    public static void main(String args[]) {
        Map<String, Integer> myMap = new HashMap();
        myMap.put("John", 5);
        myMap.put("Joe", 2);
        myMap.put("Jane", 4);
        myMap.put("Jennifer", 1);
        Stream<Map.Entry<String, Integer>> sortedStream = myMap.entrySet()
                .stream() // converts the map to an iterable stream of objects
                .sorted( // sort them by reverse order
                        Collections.reverseOrder(Map.Entry.comparingByValue()) // comparing by value is a pre-existing code that compares the values
                );
        // iterate over the computed stream
        sortedStream.forEach(entry-> System.out.println(entry.getKey() + "\t" + entry.getValue()));
    }
}