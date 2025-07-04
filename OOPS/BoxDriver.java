public class BoxDriver {
    public static void main(String[] args) {
        
        Box b1 = Box.createBox(15, 6, 2);
        Box b2 = Box.createBox(12.5, 8, 1);
        
        b1.printBoxDetails();
        b2.printBoxDetails();
    }
}
