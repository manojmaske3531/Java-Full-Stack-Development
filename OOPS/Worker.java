package Inheritance;

public class Worker extends Fellow {
	 int wid;
	 int sal;
	    

	    public Worker(String name, int age, int wid,int sal)
	    {
	        super(name, age );
	        this.wid = wid;
	        this.sal=sal;
	    }

}
