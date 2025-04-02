import java.util.Objects;
public class Point {
    private int x;
    private int y;

    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object other){
        // reflexive
        if(other == this)
            return true;
        // non-null
        if(other == null)
            return false;
        // don't even bother! they have different types
        if(getClass() != other.getClass())
            return false;
        Point point = (Point) other; // why do we need this type cast?
        return x == point.x && y == point.y;
    }

    @Override
    public int hashCode(){
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return "[" + x + ", " + y + "]";
    }

}
