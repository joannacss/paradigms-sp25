package datastructures.pets;


public class Dog extends Pet {
	Dog(String name){
		super(name);
	}
	@Override
	public void speak() {
		System.out.println("au");
	}
}