import java.util.Scanner;

class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number");

        int num = sc.nextInt(); // Corrected method name
        int num1 = num;
        int num2 = num;
        int count = 0;
        int sum = 0;

        // Step 1: Count the digits
        while (num != 0) {
            count++;
            num = num / 10;
        }

        // Reset num1 for further calculation
        num1 = num2;

        // Step 2: Extract each digit and power it with count
        while (num1 != 0) {
            int rem = num1 % 10;
            int pow = 1;
            for (int i = 1; i <= count; i++) {
                pow *= rem;
            }
            sum += pow;
            num1 = num1 / 10;
        }

        // Step 3: Compare sum with original number
        if (num2 == sum) {
            System.out.println(num2 + " is an Armstrong number");
        } else {
            System.out.println(num2 + " is not an Armstrong number");
        }
    }
}
