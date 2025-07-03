package com.example.librarymanagement;

import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class LibraryManagementSbootApplication implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementSbootApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Would you like to add a new book? (yes/no)");
        String answer = scanner.nextLine();

        while (answer.equalsIgnoreCase("yes")) {
            System.out.print("Enter Book Title: ");
            String title = scanner.nextLine();

            System.out.print("Enter Book Author: ");
            String author = scanner.nextLine();

            System.out.print("Enter Book ISBN: ");
            String isbn = scanner.nextLine();

            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setIsbn(isbn);

            bookRepository.save(book);

            System.out.println("Book saved successfully!");
            System.out.println("Would you like to add another book? (yes/no)");
            answer = scanner.nextLine();
        }

        System.out.println("Exiting interactive mode. Spring Boot REST endpoints still active.");
    }
}
