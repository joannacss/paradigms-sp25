package paradigms.classes;

public class TA extends Student{
  private String courseSection;

  public TA(String name, String [] grades, String courseSection){
    super(name, grades); 
    this.courseSection = courseSection;
  }

  public String getCourseSection(){
    return this.courseSection;
  }
}
