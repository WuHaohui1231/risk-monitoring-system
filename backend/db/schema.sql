-- backend/db/schema.sql
-- Positions Table
CREATE TABLE positions (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL,
  symbol VARCHAR(10) NOT NULL,
  quantity INTEGER NOT NULL,
  cost_basis DECIMAL(12,4),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Market Data Table
CREATE TABLE market_data (
  id SERIAL PRIMARY KEY,
  symbol VARCHAR(10) NOT NULL,
  current_price DECIMAL(12,4) NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Margin Table
CREATE TABLE margins (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL,
  loan_amount DECIMAL(14,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);