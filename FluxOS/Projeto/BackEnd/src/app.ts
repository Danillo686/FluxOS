import express, {Request, Response} from 'express'
import { supabase } from './supabase.js';

const app = express() //-> Express 
app.use(express.json()) //-> "Conexão" 


// Infos do Owner
interface Owner {
    CPF: string,
    nome: string,
    email: string,
    senha: string,
    telefone: string
}

app.get('/Owner', async (req: Request, res: Response):Promise <any> => {
  const { data, error } = await supabase
  .from('Owner')
  .select('*')

  if (error) {
    return res.status(400).json({error:error.message})
  }

  return res.json(data)
} )

app.post('/Owner', async (
  req: Request<{}, {}, Owner>, // Tipando o body da requisição
  res: Response
  ):Promise <any> => {
    const { CPF, nome, senha, email, telefone } = req.body // Parametros de entrada

    if (!CPF || !nome || !senha || !email || !telefone) {
      return res.status(400).json({Error:'Erro...Por favor, preencha todos os parametros'})
    }

    const {data, error} = await supabase 
      .from ('Owner')
      .insert([{CPF, nome, senha, email, telefone}])
      .select()

    if (error) {
      return res.status(400).json({error: error.message})
    }

    return res.status (201).json(data)
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}, http://localhost:${PORT}/ `)
})


































// //inciar: npm init -y    
// //npm install express
// //npm i --save-dev @types/express
// //npm install -D typescript @types/node
// //npm install -D @tsconfig/node24
// //npm install dotenv
// //criar um tsconfig.json e configurar o rootDir e outDir
// // npm install @supabase/supabase-js --> Supabase
// // npm install -D typescript @types/express @types/node tsx
// //para rodar: npx tsx src/nome_do_arquivo.ts 