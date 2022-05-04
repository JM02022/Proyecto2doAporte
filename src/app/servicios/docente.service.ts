import { Injectable } from '@angular/core';
import { cursos, docentes, notas } from '../Componentes/interfaces/baseDeDatos';
import { curso } from '../Componentes/interfaces/curso';
import { docente } from '../Componentes/interfaces/docente';
import { nota } from '../Componentes/interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private docentes:docente[] = docentes;
  private cursos:curso[] = cursos;
  private notas:nota[] = notas;
  private rpta:string[] = ["asistio","tardanza","no asistio"];

  constructor() { }
  
  getDocentes():docente[]{
    return this.docentes;
  }
  geCursos():curso[]{
    return this.cursos;
  }
  getNotas():nota[]{
    return this.notas;
  }
  registrarNotas(item: nota){
    for(let i = 0 ; i < notas.length; i++){
      if(item.alumno.codA == notas[i].alumno.codA){
        notas[i].unidadUno = item.unidadUno;
        notas[i].unidadDos = item.unidadDos;
        notas[i].unidadTres = item.unidadTres;
        break;
      }
    }
    console.table(notas);
  }
}
