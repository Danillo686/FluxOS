export type Users = {
    id: string,
    security_code: string | null,
    photo: string | null,
    cpf: string,
    phone: string,
    name: string,
    zip_code: string,
    role: "admin" | "owner" | "attedant" | "costumer"
}