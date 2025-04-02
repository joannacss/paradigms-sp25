package shapes;
public class Rectangle extends OrthogonalShape{
	
	public Rectangle(double b, double h){
		super(b,h);
	}
	@Override
	public double calculateArea() {
		return this.base * this.height;
	}
}