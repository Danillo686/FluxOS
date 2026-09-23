// Apenas roles permitidas, se tiver outro, adicionar aqui

export type EmployeeRole = 
    | "admin"
    | "owner"
    | "attendant"
    | "employee"

export type Role = EmployeeRole | "customer" 