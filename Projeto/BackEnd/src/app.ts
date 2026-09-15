import express, {Request, Response} from 'express'
import { supabase } from './supabase';

const app = express() //-> Express 
app.use(express.json) //-> "Conexão"

interface Owner {
  CPF: string,
  nome: string,
  email: string,
  senha: string,
  telefone: string
}

app.get('/Owner', async (req: Request, res: Response): )


































//inciar: npm init -y    
//npm install express
//npm i --save-dev @types/express
//npm install -D typescript @types/node
//npm install dotenv
//criar um tsconfig.json e configurar o rootDir e outDir
// npm install @supabase/supabase-js --> Supabase
// npm install -D typescript @types/express @types/node tsx
//para rodar: npx tsx src/nome_do_arquivo.ts 