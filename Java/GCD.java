
import java.util.*;

class GCD {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Value");

        int a = sc.nextInt();
        int b = sc.nextInt();
        int gcb = 0;
        for (int i = 1; i <= a; i++) {
            if (a % i == 0 && b % i == 0) {
                gcb = i;
            }
        }
        System.out.println(" Greatest comman divisor is: " + gcb);
    }
}
