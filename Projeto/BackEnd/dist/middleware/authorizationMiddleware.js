import { supabase } from "../supabase.js";
import { canCreateRole } from "../utils/rolePermissions.js";
export async function authorizationMiddleware(req, res, next) {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: "Usuário não autenticado" });
    }
    const { data: creator, error } = await supabase
        .from("users")
        .select("role")
        .eq("id", userId)
        .single();
    if (error || !creator) {
        return res.status(403).json({ message: "Usuário não possui um perfil de empresa" });
    }
    const creatorRole = creator.role;
    const roleToCreate = req.body.role;
    const allowed = canCreateRole(creatorRole, roleToCreate);
    if (!allowed) {
        return res.status(403).json({ message: `A role ${creatorRole} não pode criar ${roleToCreate}` });
    }
    next();
}
