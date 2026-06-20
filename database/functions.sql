-- Core functions

CREATE OR REPLACE FUNCTION get_my_role()
RETURNS TEXT
LANGUAGE SQL
STABLE
AS $$
SELECT role::TEXT FROM user_profiles WHERE id = auth.uid();
$$;
