import { aula } from "./aula";
import { curso } from "./curso";

export interface docente {
    //datos de inicio de sesion
    usuarioP: string,
    contraseñaP: string,
    //datos generales
    codD: string,
    nombreD: string,
    apellidoPD: string,
    apellidoMD: string,
    especialidadD: curso,
    celularD: string,
    direccionD: string,
}