package Inheritance;

public class Employee extends Person{
	int eid;
	double sal;
	String dept;
	Employee(String name,int age, String gender, int eid, double sal, String dept )
	{
		super (name ,age ,gender);
		this.eid=eid;
		this.sal=sal;
		this.dept = dept;
	}
	public void print() {
		System.out.println("Employee Name: "+name);
		System.out.println("Employee Age: "+age);
		System.out.println("Employee Gender: "+gender);
		System.out.println("Employee id: "+eid);
		System.out.println("Employee Salary: "+sal);
		System.out.println("Employee Department: "+dept);
		System.out.println("============================");
	}

}
