import { alumno } from "./alumno"
import { aula } from "./aula"
import { docente } from "./docente"

export interface Asistencia{
    fechaAsistencia: string,
    alumnoAsistencia:alumno,
    aulaAsistecia:aula,
    estado: string,
    modificacionesA?:number|string
}
export interface RegistroAsistencia{
    codRA :string,
    nroSesionRA: number,
    fechaRA: string,
    horaInicio: string,
    horaFin: string,
    Unidad: string,
    docenteRA: docente,
    boton:boolean 
}