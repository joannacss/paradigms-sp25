package shapes;
public class Triangle extends OrthogonalShape{
	public Triangle(double b, double h){
		super(b,h);
	}
	@Override
	public double calculateArea() {
		return (this.base * this.height)/2;
	}

	
	@Override
	public String toString(){
		return "Here I am"; 
	}
}