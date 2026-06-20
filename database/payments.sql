CREATE TABLE IF NOT EXISTS payments (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 order_id UUID,
 payment_method VARCHAR(20),
 amount NUMERIC(12,2),
 status VARCHAR(20) DEFAULT 'completed',
 created_at TIMESTAMP DEFAULT NOW()
);