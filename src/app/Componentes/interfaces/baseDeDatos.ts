import { alumno } from "./alumno";
import { curso } from "./curso";
import { docente } from "./docente";
import { nota } from "./nota";
import { tutor } from "./tutor";
export let tutores:tutor[] = [
    {
        codT:"T1",
        nombreT: "Jose",
        apellidoPT: "Pantoja",
        apellidoMT: "Titto",
        celularT: "98764"
    }
];
export let alumnos:alumno[] = [
    {
        usuarioA: "Carla123",
        contraseniaA: "Carla123",
        codA: "Alum001",
        DniA: "70435622",
        nombreA: "Carla Shande",
        apellidoPA: "Pima",
        apellidoMA: "Pantoja",
        fechaNaciA: "10-03-2014",
        sexoA: "F",
        direccionA: "Av. Las Palmeras, Los Olivos 15304",
        gradoA: "5to",
        datosT: tutores[0],
    },
    {
        usuarioA: "Jesus123",
        contraseniaA: "Jesus123",
        codA: "Alum002",
        DniA: "71449623",
        nombreA: "Jesus Andres",
        apellidoPA: "Lujan",
        apellidoMA: "Carrion",
        fechaNaciA: "20-04-1955",
        sexoA: "M",
        direccionA: "Av. Las Palmeras, Los Olivos 15304",
        gradoA: "1ro",
        datosT: tutores[1],
    }
];

export let notas:nota [] = [
    {
        unidadUno: 0,
        unidadDos:0,
        unidadTres:0,
        PromedioF:0,
        alumno: alumnos[0]
    },
    {
        unidadUno: 0,
        unidadDos:0,
        unidadTres:0,
        PromedioF:0,
        alumno: alumnos[1]
    }
];
export let cursos:curso[] = [
    {
        codC:"CR1",
        nombreC:"Comunicacion",
        nota: notas
    }
]

export let docentes:docente[] = [
    {
        //datos de inicio de sesion
        usuarioP: "D1",
        contraseñaP: "D1",
        //datos generales
        codD: "D01",
        nombreD: "Dushan",
        apellidoPD: "Quillahuaman",
        apellidoMD: "Titto",
        especialidadD: cursos[0],
        celularD: "987564123",
        direccionD: "Av. sol"
    }
]

export function buscar(lista: alumno[],user:string,password:string):number{
    let cont:number = 0;
    while(cont < lista.length){
        if(lista[cont].usuarioA == user && lista[cont].contraseniaA == password){
            return cont;
        }
        cont++;
    }
    return -1;
}