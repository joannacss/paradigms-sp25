package shapes;
public abstract class OrthogonalShape implements Shape{
	protected double base;
	protected double height;

	public OrthogonalShape(double b, double h){
		this.base = b;
		this.height = h;
	}
	
}