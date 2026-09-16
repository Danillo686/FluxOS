import { supabase } from "../supabase.js";
//POST / INSERT
export const postAttendant = async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ Error: 'Por favor, preencha todos os campos.' });
    }
    const { data, error } = await supabase
        .from('Attendant')
        .insert([{ nome, email, senha }])
        .select();
    if (error) {
        return res.status(500).json({ Error: error.message });
    }
    return res.status(200).json(data);
};
// GET
export const getAttendant = async (req, res) => {
    const { data, error } = await supabase
        .from('Attendant')
        .select('*');
    if (error) {
        return res.status(500).json({ Error: error.message });
    }
    return res.status(200).json({ message: `GET feito com sucesso!` });
};
//UPDATE / PUT
export const putAttendant = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Attendant')
        .update(req.body)
        .eq('id', id)
        .select();
    if (error) {
        return res.status(500).json({ Error: error.message });
    }
    return res.status(200).json(data);
};
//DELETE DEL
export const delAttendant = async (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { data, error } = await supabase
        .from('Attendant')
        .delete()
        .eq('id', id)
        .select();
    if (error) {
        return res.status(500).json({ Error: error.message });
    }
    return res.status(200).json({ message: `Deletado com sucesso!` });
};
