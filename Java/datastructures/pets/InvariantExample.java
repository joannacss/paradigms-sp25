package datastructures.pets;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;


public class InvariantExample {

	public static void main(String[] args){
		// Using <? Super Cat> we can assigned to it any sets of Cat, Pet, or Objects 
		// i.e., any set that is a supertype of Cat.
		Set<? super Cat> s1 = new HashSet<Object>();
		Set<? super Cat> s2 = new HashSet<Pet>();
		Set<? super Cat> s3 = new HashSet<Cat>();
		Cat cat = new Cat("Poofy");
		s1.add(cat); // can add a Cat object because the collection is <Object>
					 // Object is a grandparent of the Cat type
		s2.add(cat); // can add a Cat object because the collection is <Pet>
					 // Pet is a parent of the Cat Type
		s3.add(cat); // can add a Cat object because the collection is <Cat>


		// Declaring a data structure using <? extends Pet> 
		// makes it possible to assign to it any DS 
		// that is a subtype of Pet
		/* Set<? extends Pet> s1 = new HashSet<Object>(); // NOT ALLOWED */
		Set<? extends Pet> s4 = new HashSet<Cat>();
		Set<? extends Pet> s5 = new HashSet<Dog>();


		// 
		
		List<Dog> dogs = new ArrayList<>();
		List<Pet> myList = null; // ❌ = dogs would be wrong; 
		List<? extends Pet> myList1 = dogs; // <T> can be Pet or any of its subtypes

		List<? super Cat> myList2 = myList; // <T> can be Cat or any of its supertypes
		// ❌ List<? super Cat> myList3 = dogs; // Dog is not allowed (not supertype of Cat)

	}
}