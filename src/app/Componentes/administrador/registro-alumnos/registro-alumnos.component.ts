import { Component, OnInit } from '@angular/core';
import { alumno } from '../../interfaces/alumno';
import { tutor } from '../../interfaces/tutor';
@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
//   TutorVacio(): tutor {
//     return {
//       codT: "",
//       nombreT: "",
//       apellidoPT: "",
//       apellidoMT: "",
//       celularT: "",
//     }

//   };
//   public tutor: tutor = this.TutorVacio();

//   AlumnoVacio(): alumno 
//   {
//     return {
//       usuarioA: "",
//       contraseniaA: "",
//       //datos generales
//       codA: "",
//       DniA: "",
//       nombreA: "",
//       apellidoPA: "",
//       apellidoMA: "",
//       fechaNaciA: "",
//       sexoA: "",
//       direccionA: "",
//       gradoA: "",
//       datosT: this.TutorVacio(),
//     } 
//   };
  
//   public alumno: alumno = this.AlumnoVacio();
//   public alumnos: alumno[] = [];
// onDatos(): void {
//   if(this.posicion = -1){
//   console.log(this.alumno);
//   this.alumnos.push(this.alumno);
//   this.alumno = this.AlumnoVacio();
//   console.log('El arreglo tiene ', this.alumnos.length, 'elementos')
// }else {
//   let seleccion: alumno = this.alumnos[this.posicion];

//   seleccion.usuarioA = this.alumno.usuarioA;
//   seleccion.nombreA = this.alumno.nombreA;

//   this.posicion = -1;
//   this.alumno = this.AlumnoVacio();
// }
//   }
//   // onChange(event: Event):void{
//   //   const elemento = event.target as HTMLInputElement;
//   //   this.alumno.nombre = elemento.value;
//   // }
//   public posicion: number = -1;

// onEliminar(i: number): void {
//   this.alumnos.splice(i, 1);
// }
// onModificar(i: number): void {
//   let selecion: alumno = this.alumnos[i];

//   this.alumno.nombreA = selecion.nombreA;
//   this.alumno.apellidoPA = selecion.apellidoPA;
//   this.alumno.apellidoMA = selecion.apellidoMA;
//   this.alumno.usuarioA = selecion.usuarioA;



//   this.posicion = i;
// }

}
