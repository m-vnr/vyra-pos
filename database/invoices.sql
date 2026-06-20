CREATE TABLE IF NOT EXISTS invoices (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 order_id UUID,
 invoice_number VARCHAR(50),
 subtotal NUMERIC(12,2),
 cgst NUMERIC(12,2),
 sgst NUMERIC(12,2),
 grand_total NUMERIC(12,2),
 created_at TIMESTAMP DEFAULT NOW()
);