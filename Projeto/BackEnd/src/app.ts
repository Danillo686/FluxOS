import express from 'express'
import OwnerRoutes from './routes/owner.routes.js'
import AttendantRoutes from './routes/attendant.route.js'
import CostumerRoutes from './routes/customer.route.js'

const app = express()
app.use(express.json())
app.use(OwnerRoutes)
app.use(AttendantRoutes)
app.use(CostumerRoutes)


app.listen(3001, () => {
  console.log(`Servidor rodando...Rodando em http://localhost:3001/`)
})