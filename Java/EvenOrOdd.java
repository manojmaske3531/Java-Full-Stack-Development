import java.util.Scanner;
class  EvenOrOdd 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner (System.in);
		System.out.println("Eneter the Number:");
		
			int num = sc.nextInt();
			if(num%2==0) {
				System.out.println(num+" is Even number " );
			} else{
				System.out.println(num+" is odd number ");
		}
	}
}
