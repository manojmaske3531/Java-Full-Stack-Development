import java.util.Scanner;
class  EvenOddUsingMethod
{
	public static void main (String[] args) 
	{
		Scanner sc = new Scanner (System.in);
		System.out.println(" Enetr The Number: ");

		int num = sc.nextInt();
		String res = evenodd(num);
		System.out.println( num+ " is a "+res+" Number");
	}
		// Method identyfy the number is Even or Odd
		public static String evenodd(int num) {
			if(num%2==0) {
				return "Even";
			} else {
				return "odd";
			
		}
	}
}
