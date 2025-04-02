package datastructures.pets;

public class Cat extends Pet {
	Cat(String name){
		super(name);
	}
	@Override
	public void speak() {
		System.out.println("meow");
	}
}