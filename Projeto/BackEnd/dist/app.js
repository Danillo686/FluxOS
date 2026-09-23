import express from 'express';
import cors from 'cors'; //--> Ele envia os dados para o front poder usar
import userRoute from "./route/userRoute.js";
import loginRoute from "./route/loginRoute.js";
import customerRoute from "./route/customerRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(loginRoute);
app.use(customerRoute);
app.listen(3001, () => {
    console.log(`Servidor rodando...Rodando em http://localhost:3001/`);
});
//Instalar o cors para enviar os dados para o front
//npm install cors
//npm install -D @types/cors
