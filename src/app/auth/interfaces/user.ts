export interface UserI {
    Rut_Empleado?: string;
    Nombres?: string;
    Apellido_Paterno?: string;
    Apellido_Materno?: string;
    Telefono_Empleado?: string;
    Cargo?: string;
    Email_Empleado?: string;
    Direccion_Empleado?: string;
    Estado?: string;
    Clave?: string;
    Privilegio?: string;
    Codigo_Comuna?: string;
    Codigo_Sucursal?: string;

}
export interface UserResponseI extends UserI {
    message: string;
    token: string;
    status: number;
}
