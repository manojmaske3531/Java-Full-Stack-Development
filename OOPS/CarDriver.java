
public class CarDriver {
    public static void main(String[] args) {
        Car c1 = new Car("Audi", 20000000); // Create one Car object

        // Multiple references pointing to the same object
        Car C1 = c1;
        Car C2 = c1;
        Car C3 = c1;
        Car C4 = c1;

        // All outputs will be the same because all refer to the same object
        System.out.println(C1);
        System.out.println(C2);
        System.out.println(C3);
        System.out.println(C4);
    }
}
