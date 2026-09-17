import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("As variáveis não carregaram corretamente, tente novamente...");
}
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
// npm init -y; npm install express dotenv @supabase/supabase-js; npm install -D typescript @types/node @types/express @tsconfig/node24 tsx 
//npm install bcrypt
//npm install -D @types/bcrypt
//
