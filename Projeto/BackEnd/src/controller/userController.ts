import {Request, Response} from "express"
import {supabase} from "../supabase.js"

export async function register (
    req: Request,
    res: Response

) {
    const {email, password, name, cpf, phone, zip_code} = req.body //--> desestruturação

    const {data, error} = await supabase.auth.signUp({email, password})

    if (error) {
        return res.status(500).json({Error: error.message})
    }

    const userId = data.user?.id

    if (!userId) {
        return res.status(400).json({message:`Não foi possível obter o ID do usuário`})
    }

    const {error: profileError} = await supabase 
    .from('users')
    .insert({id: userId, name, cpf, phone, zip_code, role: "cliente"})

    if (profileError) {
        return res.status(400).json({message: profileError.message})
    }

    return res.status(200).json({message:`Usuário cadastrado com sucesso`, id: userId})
}
