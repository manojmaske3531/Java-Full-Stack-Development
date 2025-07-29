import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class LibraryApp extends JFrame {
    private JTextField titleField, authorField;
    private JButton addBtn, showBtn;
    private JTextArea displayArea;

    public LibraryApp() {
        setTitle("Library Management");
        setSize(500, 400);
        setLayout(new FlowLayout());

        add(new JLabel("Title:"));
        titleField = new JTextField(20);
        add(titleField);

        add(new JLabel("Author:"));
        authorField = new JTextField(20);
        add(authorField);

        addBtn = new JButton("Add Book");
        showBtn = new JButton("Show All Books");
        displayArea = new JTextArea(10, 40);
        displayArea.setEditable(false);

        add(addBtn);
        add(showBtn);
        add(new JScrollPane(displayArea));

        addBtn.addActionListener(e -> addBook());
        showBtn.addActionListener(e -> displayBooks());

        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    private void addBook() {
        String title = titleField.getText();
        String author = authorField.getText();
        try (Connection con = DBConnection.getConnection()) {
            String sql = "INSERT INTO books(title, author, available) VALUES (?, ?, TRUE)";
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setString(1, title);
            stmt.setString(2, author);
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(this, "Book Added!");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private void displayBooks() {
        displayArea.setText("");
        try (Connection con = DBConnection.getConnection()) {
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM books");
            while (rs.next()) {
                displayArea.append(
                    rs.getInt("book_id") + ": " +
                    rs.getString("title") + " by " +
                    rs.getString("author") + " - " +
                    (rs.getBoolean("available") ? "Available" : "Issued") + "\n"
                );
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new LibraryApp();
    }
}
