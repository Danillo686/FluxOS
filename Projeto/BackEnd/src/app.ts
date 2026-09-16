import express from 'express'
import attendantRota from './route/attendant.route.js'
const app = express() 
app.use(express.json())

app.use(attendantRota)
app.listen(3001, () => {console.log("Rodando em: http://localhost:3001/")})