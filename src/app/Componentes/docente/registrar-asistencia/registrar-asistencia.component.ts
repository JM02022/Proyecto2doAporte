import { Component, OnInit } from '@angular/core';
import { ServiciosAlumnoService } from 'src/app/servicios/servicios-alumno.service';
import { alumno } from '../../interfaces/alumno';
import { Asistencia, RegistroAsistencia } from '../../interfaces/asistencia';

@Component({
   selector: 'app-registrar-asistencia',
   templateUrl: './registrar-asistencia.component.html',
   styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
   public rpta:string[] = ["asistio","tardanza","no asistio"];
   public alumnos: alumno[] = [];
   constructor(private servicio: ServiciosAlumnoService) {
     this.alumnos = servicio.getListaAlumnos();
    }
  ngOnInit(): void {
   }
  
  public asistencias:Asistencia [] = [];
   public registroAsistencias: RegistroAsistencia [] = [];
   aux:number = 0;
   myform: any;
   //metodos
  btn:boolean = false;
  getNombreDocente():string { //editar nombre
    return this.registroAsistencias[0].docenteRA.nombreD + " " + this.registroAsistencias[0].docenteRA.apellidoPD + " " + this.registroAsistencias[0].docenteRA.nombreD 
   };
   cargarRegistro(i:number): void{
     this.aux = i;
     this.btn = this.registroAsistencias[i].boton;
   }
  mostrarFecha(){
    return this.registroAsistencias[this.aux].fechaRA;
  }
  posAlumno(alumno:alumno, listaAsistencia: Asistencia[],fecha:string):number{
    for(let i = 0 ; i < listaAsistencia.length;i++){
      if(listaAsistencia[i].alumnoAsistencia == alumno && listaAsistencia[i].fechaAsistencia == fecha){
        return i;
      }
    } 
    return -1;
  }
  guardarAsistencia(i:number,j:number):void{
    console.log(this.mostrarFecha())
    let pos = this.posAlumno(this.alumnos[i],this.asistencias,this.mostrarFecha());
    if(this.asistencias.includes( this.asistencias[pos]) && this.asistencias[pos].fechaAsistencia ==  this.mostrarFecha() ){
      this.asistencias[pos].estado = this.rpta[j];
    }
    else{
      this.asistencias.push({
        fechaAsistencia: this.mostrarFecha(),
        alumnoAsistencia: this.alumnos[i],
        aulaAsistecia:this.asistencias[0].aulaAsistecia,
        estado: this.rpta[j],
    })
    }
    console.table(this.asistencias);
  }
  actualizar(n:number){
    this.registroAsistencias[n].boton = true;
    this.btn = this.registroAsistencias[n].boton;
  }
}
