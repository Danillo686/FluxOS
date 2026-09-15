import express from "express";
import { clientes } from "./data/clientes.js";
const PORT = 3001;
const app = express();
// Sem exportação: 
// type Clientes = {
//     nome: string,
//     email: string,
//     idade: number,
//     numero: string
// }
// let clientes: Clientes[] = [
//     {
//         nome: "Carlos",
//         email: "jalambipau@gmail",
//         idade: 20,
//         numero: "20202020202"
//     },
//     {
//         nome: "João",
//         email: "joaosilva@gmail",
//         idade: 30,
//         numero: "30303030303"
//     }
// ]
app.get("/", (req, res) => {
    res.json(clientes);
});
app.listen(PORT, () => {
    console.log("Server is running on port 3001");
});
//inciar: npm init -y    
//npm install express
//npm i --save-dev @types/express
//npm install -D typescript @types/node
//criar um tsconfig.json e configurar o rootDir e outDir
//para rodar: npx tsx src/nome_do_arquivo.ts 
