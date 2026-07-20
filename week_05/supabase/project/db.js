import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_SECRET_KEY } = process.env;

export const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);
