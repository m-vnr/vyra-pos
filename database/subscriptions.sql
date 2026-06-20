CREATE TABLE IF NOT EXISTS subscriptions (
 id UUID PRIMARY KEY,
 outlet_id UUID,
 plan VARCHAR(50),
 monthly_price NUMERIC(10,2),
 status VARCHAR(50),
 start_date DATE,
 end_date DATE
);
