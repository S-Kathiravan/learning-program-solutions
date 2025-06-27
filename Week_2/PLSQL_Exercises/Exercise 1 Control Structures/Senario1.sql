BEGIN
  FOR cust_rec IN (
    SELECT CustomerID
    FROM Customers
    WHERE MONTHS_BETWEEN(SYSDATE, DOB)/12 > 60
  )
  LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = cust_rec.CustomerID;
  END LOOP;
END;