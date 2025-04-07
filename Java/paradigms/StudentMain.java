package paradigms;
import paradigms.classes.Student;

public class StudentMain{

	public static void main(String [] args){
		Student s = new Student("John", new String[] {
			 "A", "A-", "B"
		});
		
		System.out.println("GPA " + s.computeGPA());
	}
}