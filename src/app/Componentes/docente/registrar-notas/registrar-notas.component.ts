import { Component, OnInit } from '@angular/core';
import { alumnos } from "../../interfaces/baseDeDatos";
import { alumno } from "../../interfaces/alumno"
import { docente } from '../../interfaces/docente';
import { DocenteService } from 'src/app/servicios/docente.service';
import { curso } from '../../interfaces/curso';
import { nota } from '../../interfaces/nota';
import { ServiciosAlumnoService } from 'src/app/servicios/servicios-alumno.service';

@Component({
  selector: 'app-registrar-notas',
  templateUrl: './registrar-notas.component.html',
  styleUrls: ['./registrar-notas.component.css']
})
export class RegistrarNotasComponent implements OnInit {
  public lista: alumno[] = alumnos;
  public docentes: docente[] = [];
  public cursos: curso[] = [];
  public notas: nota[] = [];

  constructor(private serviceD: DocenteService, private serviceA: ServiciosAlumnoService) {
    this.docentes = serviceD.getDocentes();
    this.cursos = serviceD.geCursos();
    this.notas = serviceD.getNotas();
    this.lista = serviceA.getListaAlumnos();
  }

  ngOnInit(): void {
  }

  public parcial1: number = 0;
  public parcial2: number = 0;
  public parcial3: number = 0;
  public total: number = 0;

  onPromedio(): number {
    this.total = (this.parcial1 + this.parcial2 + this.parcial3) / 3;
    this.notas[this.posicion].PromedioF = this.total;
    console.log("El promedio es: " + this.total);
    return this.total;
  }

  //Guardar posicion
  public posicion: number = -1;
  guardarPos(i: number) {
    this.total = 0;
    this.posicion = i;
  }

  //Guardar notas
  guardarNota() {
    this.notas[this.posicion].unidadUno = this.parcial1;
    this.notas[this.posicion].unidadDos = this.parcial2;
    this.notas[this.posicion].unidadTres = this.parcial3;
    this.serviceD.registrarNotas(this.notas[this.posicion]);
    this.parcial1 = 0;
    this.parcial2 = 0;
    this.parcial3 = 0; 
    console.log("Se guardó la nota");
  }

  onConfirmar() {
    alert("Se publicaron las notas");
  }

  //Buscar alumno
  public validar: boolean = false;
  public alumnoBuscado: string = "";
  public alumnoBuscadoTotal: alumno= {
    usuarioA: "",
    contraseniaA: "",
    codA: "",
    DniA: "",
    nombreA: "",
    apellidoPA: "",
    apellidoMA: "",
    fechaNaciA: "",
    sexoA: "",
    direccionA: "",
    gradoA: ""
  }
  public pos: number = -1;

  onBuscar() {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.notas[i].alumno.codA == this.alumnoBuscado) {
        console.log("El alumno es " + this.lista[i].nombreA)
        this.validar = true;
        this.alumnoBuscadoTotal = this.lista[i];
        this.pos = i;
        break;
      } else {
        this.validar = false;
      }
    }
  }

}
