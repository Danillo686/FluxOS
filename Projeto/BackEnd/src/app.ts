import express from 'express'
import cors from 'cors' //--> Ele envia os dados para o front poder usar
import OwnerRoutes from './route/owner.route.js'
import AttendantRoutes from './route/attendant.route.js'
import CostumerRoutes from './route/customer.route.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(OwnerRoutes)
app.use(AttendantRoutes)
app.use(CostumerRoutes)

app.listen(3001, () => {
  console.log(`Servidor rodando...Rodando em http://localhost:3001/`)
})

//Instalar o cors para enviar os dados para o front
//npm install cors
//npm install -D @types/cors
