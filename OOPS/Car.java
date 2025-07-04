public class Car {
    String brand;
    double price;

    Car(String brand,double price){
        this.brand = brand;
        this.price = price;
    }
    public void print() {
        System.out.println("Car brand: "+brand);
        System.out.println("Car price: "+price);
    }
}
