package Inheritance;

public class EmployeeDriver { 

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee e1 = new Employee("Sanjana",21,"female",101,20000,"Development");
		e1.print();
		
		Employee e2 = new Employee("Mangesh",21,"male",102,20000,"Testing");
		e2.print();
		
		Employee e3 = new Employee("Manoj",23,"male",103,21000,"Development");
		e3.print();


	}

}
