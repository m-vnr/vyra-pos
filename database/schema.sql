-- Vyra POS Core Schema
-- Initial database schema for multi-tenant restaurant POS

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE user_role AS ENUM ('super_admin','restaurant_admin','cashier','kitchen');
CREATE TYPE order_status AS ENUM ('pending','confirmed','preparing','ready','served','completed','cancelled');

CREATE TABLE outlets (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 name VARCHAR(255) NOT NULL,
 city VARCHAR(100),
 state VARCHAR(100),
 gstin VARCHAR(15),
 is_active BOOLEAN DEFAULT TRUE,
 created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE user_profiles (
 id UUID PRIMARY KEY,
 email TEXT NOT NULL,
 role user_role NOT NULL,
 outlet_id UUID REFERENCES outlets(id)
);
