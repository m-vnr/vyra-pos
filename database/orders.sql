CREATE TABLE IF NOT EXISTS orders (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 table_no VARCHAR(20),
 status VARCHAR(30) DEFAULT 'draft',
 total NUMERIC(12,2) DEFAULT 0,
 payment_method VARCHAR(20),
 created_at TIMESTAMP DEFAULT NOW()
);