import { Router } from "express"
import { postOwner, getOwner, putOwner, deletOwner, getIdOwner } from '../controllers/owner.controller.js'

const rota = Router() 

rota.post('/Owner', postOwner)
rota.delete('/Owner/:id', deletOwner)
rota.get('/Owner', getOwner)
rota.get('/Owner/:id', getIdOwner)
rota.put('/Owner/:id', putOwner)

export default rota