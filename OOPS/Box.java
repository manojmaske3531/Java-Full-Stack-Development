public class Box {
    double length;
    double width;
    double capacity;

    // Default constructor
    public Box() {}

    // Parameterized constructor
    public Box(double length, double width, double capacity) {
        this.length = length;
        this.width = width;
        this.capacity = capacity;
    }

    // Factory method
    public static Box createBox(double length, double width, double capacity) {
        return new Box(length, width, capacity);
    }

    // Method to print box details
    public void printBoxDetails() {
        System.out.println("Box length: " + length);
        System.out.println("Box width: " + width);
        System.out.println("Box capacity: " + capacity);
        System.out.println("========================");
    }
}
