package datastructures;
// import statement
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;
// Using * vs using fully qualified class name
// * = import all classes inside the package

public class CollectionsExample{

    public static void main(String [] args){
        // list of strings
		List<String> myList = new ArrayList<>();

        // set of strings
		Set<String> mySet = new HashSet<>();

        // map of <id: string>
        Map<String, String> myMap = new HashMap<>();

        // iterating over the collections
		for(String element: myList){}
		for(String element: mySet){}

        
        // playing around with primitive wrappers
        int a = 2;
        Integer b = a;
        // list of primitives (ex: int)
        List<Integer> myIntList = new ArrayList<>();
        myIntList.add(a);

        // list of floats
        List<Float> myFloatList = new ArrayList<>();

        

    }
}