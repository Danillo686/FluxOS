import {EmployeeRole, Role} from "../type/Role.js"

const permissions : Record<EmployeeRole, Role[]> = { //Significa: Cada role de funcionário terá uma lista de roles que pode criar, ou seja, a permissão de Role
    admin: [
        "admin",
        "owner",
        "attendant",
        "employee"
    ],

    owner: [
        "owner", 
        "attendant",
        "employee"
    ],

    attendant: [
        "customer"
    ],

    employee: []
}

export function canCreateRole (
    creatorRole: EmployeeRole,
    roleToCreate: Role
):boolean {
    console.log("Creator role:", creatorRole)
    console.log("Role to create:", roleToCreate)
    console.log("Permissions:", permissions[creatorRole])
    return permissions[creatorRole].includes(roleToCreate)
} 