public class Book {
    int id;
    String title;
    String author;
    boolean available;

    public Book(int id, String title, String author, boolean available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }

    public String toString() {
        return id + ": " + title + " by " + author + (available ? " (Available)" : " (Issued)");
    }
}
