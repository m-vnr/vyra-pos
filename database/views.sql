CREATE OR REPLACE VIEW daily_sales_view AS
SELECT CURRENT_DATE as business_date, 0::numeric as total_sales;

CREATE OR REPLACE VIEW top_items_view AS
SELECT 'Sample Item' as item_name, 0 as qty;
