package datastructures;

import java.util.*;

public class CollectionsExampleHardcoded{

	public static void main(String [] args){
		// hardcoding static type vs programming to an interface
		// why is it important?
		// LinkedList<String> cars = new LinkedList<>();
		List<String> cars = new LinkedList<>();
		cars.add("Camry");
		cars.add("BMW");
		cars.add("Mazda");
		cars.add("Corolla");

		// Example 2:
		Set<String> set = new HashSet<>();
		
		set.add("A");
		set.add("X");
		set.add("Q");
		set.add("F");
		set.add("M");
		set.add("D");
		

		// how can we make this print in order?
		// is there a way to do so with minimal changes to this code?
		// Answer: Set<String> set = new TreeSet<>();
		for(String str: set)
			System.out.println(str);
	}
}


