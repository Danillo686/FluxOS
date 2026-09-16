import {Router} from 'express'
import {
    postAttendant,
    getAttendant,
    putAttendant,
    delAttendant
} from '../controller/attendant.controller.js'

const rota = Router()

rota.post('/Attendant', postAttendant)
rota.put ('/Attendant:id', putAttendant)
rota.get ('/Attendant', getAttendant)
rota.delete ('/Attendant:id', delAttendant)

export default rota