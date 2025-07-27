package OOPS;

import java.net.StandardSocketOptions;

public class StudentClass {
     // creating a new data type
    public static class Student{
        String name;
        int rno;
        double percent;
     }
     public static void fun(String x){
        System.out.println(x);
        return;
     }
    public static void main(String [] args) {
        String name ="Mangesh";
        fun(name);

         
        Student s1 = new Student();
        s1.name = "Manoj";
        s1.rno = 31;
        s1.percent = 98.5;
        System.out.println(s1.name);

        Student s2 = new Student();
        s2.name = "Ajay";
        s2. rno = 32;
        s2.percent= 92.5;
        System.out.println(s2.name);

    }
}
