import { Injectable } from '@angular/core';
import { alumno } from '../Componentes/interfaces/alumno';
import { alumnos, tutores } from '../Componentes/interfaces/baseDeDatos';
import { tutor } from '../Componentes/interfaces/tutor';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAlumnoService {
  private alumnos:alumno[] = alumnos;
  private tutores:tutor[] = tutores;
  constructor() { }
  getListaAlumnos(): alumno[]{
    return this.alumnos;
  }
  getListaTutores(): tutor[]{
    return this.tutores;
  }
}
