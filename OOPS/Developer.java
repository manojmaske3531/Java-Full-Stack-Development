package Inheritance;

public class Developer extends Worker {
    int level;
    int onproject;
    int comproject;

    public Developer(String name, int age, int wid, int level, int onproject,int sal, int comproject) {
        super(name, age ,wid , sal  ); // Call to Fellow constructor
        this.level = level;
        this.onproject = onproject;
        this.comproject = comproject;
    }

    public void print() {
        System.out.println("Emp Name: " + name);
        System.out.println("Emp Age: " + age);
		System.out.println("Emp ID: " + wid);
		System.out.println("Emp Salary: "+sal);
		System.out.println("Emp Level: " + level);
        System.out.println("Emp Ongoing Projects: " + onproject);
        System.out.println("Emp Completed Projects: " + comproject);
        System.out.println("=====================================");
    }
}
