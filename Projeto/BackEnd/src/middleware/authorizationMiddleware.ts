import { Request, Response, NextFunction } from "express"
import { supabase } from "../supabase.js"
import { canCreateRole } from "../utils/rolePermissions.js"
import { EmployeeRole, Role } from "../type/Role.js"

export async function authorizationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userId = req.user?.id

    if (!userId) {
        return res.status(401).json({message:"Usuário não autenticado"})
    }

    const { data: creator, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", userId)
    .single()

    if (error || !creator) {
        return res.status(403).json({message:"Usuário não possui um perfil de empresa"})
    }

    const creatorRole = creator.role as EmployeeRole
    const roleToCreate = req.body.role as Role

    const allowed = canCreateRole( creatorRole, roleToCreate )

    if (!allowed) {
        return res.status(403).json({message:`A role ${creatorRole} não pode criar ${roleToCreate}`})
    }
    next()
}