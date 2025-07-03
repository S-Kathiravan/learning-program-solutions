package com.library.controller;

import com.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/")   // maps to home.jsp
    public String home(Model model) {
        model.addAttribute("books", bookService.getBooks());
        return "home";
    }

    @PostMapping("/addBook")
    public String addBook(@RequestParam("bookName") String bookName, Model model) {
        bookService.addBook(bookName);
        model.addAttribute("books", bookService.getBooks());
        return "home";
    }
}
