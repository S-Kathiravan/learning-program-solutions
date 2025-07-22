package com.cognizant.account.models;

public class Account {
    private String number;
    private String type;
    private double balance;

    public Account(String number, String type, double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

    // Getters and Setters
    public String getNumber() { return number; }
    public String getType() { return type; }
    public double getBalance() { return balance; }

    public void setNumber(String number) { this.number = number; }
    public void setType(String type) { this.type = type; }
    public void setBalance(double balance) { this.balance = balance; }
}
