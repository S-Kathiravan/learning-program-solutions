package com.library.service;

import com.library.repository.BookRepository;

import java.util.ArrayList;
import java.util.List;

public class BookService {
    private BookRepository bookRepository;
    private LoggerService loggerService;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookService(BookRepository bookRepository, LoggerService loggerService) {
        this.bookRepository = bookRepository;
        this.loggerService = loggerService;
    }


    public List<String> getBooks() {
        // for simplicity return hard-coded list
        List<String> books = new ArrayList<>();
        books.add("Spring in Action");
        books.add("Effective Java");
        return books;
    }


    public void addBook(String bookName) {
        loggerService.log(bookName);
        bookRepository.saveBook(bookName);
        loggerService.log("Book added successfully.");
    }
}
