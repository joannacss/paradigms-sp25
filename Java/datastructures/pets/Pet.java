package datastructures.pets;


public abstract class Pet{
	String name;
	Pet(String name){
		this.name = name;
	}
	public abstract void speak();
}