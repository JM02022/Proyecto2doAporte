import { aula } from "./aula";
import { nota } from "./nota";
import { tutor } from "./tutor";

export interface alumno{
    //datos de inicio de sesion
    usuarioA:string,
    contraseniaA:string,
    //datos generales
    codA:string,
    DniA:string,
    nombreA: string,
    apellidoPA:string,
    apellidoMA:string,
    fechaNaciA:string,
    sexoA:string,
    direccionA:string,
    gradoA:string, 
    datosT?:tutor,
}