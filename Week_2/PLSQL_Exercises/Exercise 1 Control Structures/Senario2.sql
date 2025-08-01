BEGIN
  FOR cust_rec IN (
    SELECT CustomerID, Balance
    FROM Customers
  )
  LOOP
    IF cust_rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'Y'
      WHERE CustomerID = cust_rec.CustomerID;
    ELSE
      UPDATE Customers
      SET IsVIP = 'N'
      WHERE CustomerID = cust_rec.CustomerID;
    END IF;
  END LOOP;

  COMMIT;
END;
