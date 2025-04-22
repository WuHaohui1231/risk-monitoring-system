-- add a test client loan
INSERT INTO margins (client_id, loan_amount) VALUES (1, 3000);

-- add some positions for client 1
INSERT INTO positions (client_id, symbol, quantity, cost_basis)
VALUES
  (1, 'AAPL', 100, 150.00),
  (1, 'TSLA', 50, 600.00);
