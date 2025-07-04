
public class Student {
    int id = 101;
    String name = "manoj";
    public static void main(String[] args) {
        Student s1 = new Student();
        System.out.println(s1.id);
        System.out.println(s1.name);
        test(s1);
    }
    public static void test(Student s1)
    {
        System.out.println(s1.id);
        System.out.println(s1.name);
    }
    
}
