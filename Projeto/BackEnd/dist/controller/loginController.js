import { supabase } from "../supabase.js";
export async function login(req, res) {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        return res.status(401).json({ Error: error.message });
    }
    const userId = data.user?.id;
    console.log("ID do Auth:", userId);
    if (!userId) {
        return res.status(400).json({ message: `Não foi possível obter o ID do usuário` });
    }
    const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("id, name, role")
        .eq("id", userId)
        .single();
    if (profileError) {
        return res.status(401).json({ message: `Perfil do usuário não encontrado` });
    }
    return res.status(200).json({
        message: "Login realizado com sucesso",
        user: {
            id: profile.id,
            name: profile.name,
            role: profile.role
        },
    });
}
