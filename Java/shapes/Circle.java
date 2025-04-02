package shapes;
public class Circle implements Shape{
	private double radius;
	public Circle(double r){
		this.radius = r;
	}
	@Override
	public double calculateArea() {
		return Math.PI * this.radius * this.radius;
	}
}