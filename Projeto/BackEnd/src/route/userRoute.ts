import {Router} from "express"
import { register }  from "../controller/userController.js"

const   rota = Router()

rota.post('/register', register)

export default rota