public class PointApp{

   public static void main(String[] args) {
      Point p1 = new Point(1,2);
      Point p2 = new Point(1,2);
      Point p3 = new Point(3,4);

      System.out.println(p1 == p2); 	// false
      System.out.println(p1.equals(p2));// true
      System.out.println(p2.equals(p3));// false
      System.out.println(p3.equals(null));// false
      System.out.println(p1.hashCode());// returns an integer number (e.g: 994)
   }
}
