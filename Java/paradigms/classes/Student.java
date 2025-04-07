package paradigms.classes;

public class Student {

	private String [] grades;
	private String name;

	public Student(String name, String[] grades){
		this.name = name;
		this.grades = grades;
	}

	public float computeGPA(){
		// for(int i = 0 ; i < grades.lenght ; i++){
		// 	String grade = grades[i];
		// }
		float gpa = 0;
		for(String grade: grades){
			switch(grade){
				case "A": gpa += 4; break;
				case "A-": gpa += 3.667; break;
				case "B+": gpa += 3.333; break;
				case "B": gpa += 3; break;
				case "B-": gpa += 2.667; break;
				case "C+": gpa += 2.333; break;
				case "C": gpa += 2; break;
				case "C-": gpa += 1.667; break;
				case "D": gpa += 1; break;
				case "F": gpa += 0; break;
			}
		}
		return gpa / grades.length;
	}


	// getter methods
	public String getName(){
		return this.name;
	}

	public String[] getGrades(){
		return this.grades;
	}

	// setters?
	public void setName(String name){
		this.name = name;
	}

	public void setGrades(String [] grades){
		this.grades = grades;
	}
}