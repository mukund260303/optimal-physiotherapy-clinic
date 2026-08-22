import { createClient } from '@supabase/supabase-js'; // used to Import the Supabase client creation function 

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// ! -> The exclamation mark is a TypeScript non-null assertion operator. It tells the TypeScript compiler that you are certain that the value will not be null or undefined at runtime. In this case, it indicates that you are confident that the environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY will always have valid values when the code runs.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);