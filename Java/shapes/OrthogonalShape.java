package shapes;
public abstract class OrthogonalShape implements Shape{
	protected double base;
	protected double height;

	public OrthogonalShape(double b, double h){
		this.base = b;
		this.height = h;
	}
	

	@Override
	public String toString(){
		return this.getClass().getName() + " = " + 
			this.base + "," +
			this.height;

	}
}