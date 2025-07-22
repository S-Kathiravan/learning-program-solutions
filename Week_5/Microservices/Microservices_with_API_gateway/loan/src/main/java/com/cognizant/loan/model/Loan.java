package com.cognizant.loan.model;

public class Loan {
    private String number;
    private String type;
    private int loan;
    private int emi;
    private int tenure;

    public Loan(String number,String type,int loan,int emi,int tenure){
        this.number = number;
        this.type = type;
        this.loan = loan;
        this.emi = emi;
        this.tenure = tenure;
    }

    public String getNumber(){return this.number;}
    public String getType(){return this.type;}
    public int getLoan(){return this.loan;}
    public int getEmi(){return this.emi;}
    public int getTenure(){return this.tenure;}

    public void setNumber(String number){this.number = number;}
    public void setType(String type){this.type = type;}
    public void setLoan(int loan){this.loan = loan;}
    public void setEmi(int emi){this.emi = emi;}
    public void setTenure(int tenure){this.tenure = tenure;}

}
