import { Component, OnInit } from '@angular/core';
import { docentes } from '../../interfaces/baseDeDatos'; 
import { docente } from '../../interfaces/docente';
import { curso } from '../../interfaces/curso';
import { cursos,notas } from '../../interfaces/baseDeDatos';
@Component({
  selector: 'app-registro-docentes',
  templateUrl: './registro-docentes.component.html',
  styleUrls: ['./registro-docentes.component.css']
})
export class RegistroDocentesComponent implements OnInit {

  // public docentes: docente[] = docentes
  // public docente: docente = this.docenteVacio();
  // public posicion: number = -1;


  // cursoVacio():curso {return{
  //   codC:"",
  //   nombreC:"",
  //   nota:notas[0], 
  // }
  // }
  // docenteVacio(): docente {
  //   return{
  //         //datos de inicio de sesion
  //   usuarioP: "",
  //   contraseñaP: "",
  //   //datos generales
  //   codD: "",
  //   nombreD: "",
  //   apellidoPD: "",
  //   apellidoMD: "",
  //   especialidadD: this.cursoVacio(),
  //   celularD: "",
  //   direccionD: "",
  //   }
  // }

  // onAgregar(): void{
  //   if (this.posicion == -1){
  //     console.log(this.docente);
  //     this.docentes.push(this.docente);
  //     this.docente = this.docenteVacio();
  //     console.log("el arreglo alumnos tiene ", this.docentes.length, "elementos")
  //   }
  //   else{
  //     let seleccion: docente = this.docentes[this.posicion];

  //     seleccion.usuarioP = this.docente.usuarioP;
  //     seleccion.contraseñaP = this.docente.contraseñaP;
  //     seleccion.codD= this.docente.codD;
  //     seleccion.nombreD = this.docente.nombreD;
  //     seleccion.apellidoPD= this.docente.apellidoPD;
  //     seleccion.apellidoMD= this.docente.apellidoMD;
  //     seleccion.especialidadD = this.docente.especialidadD;
  //     seleccion.celularD = this.docente.celularD;



  //     this.docente = this.docenteVacio();
  //     this.posicion = -1;
  //   }
  // }

  // onEliminar(i: number): void{
  //   this.docentes.splice(i, 1);
    
  // }
  // onModificar(i: number): void{
  //   let selecion: docente = this.docentes[i];
    
  //   this.docente.codD = selecion.codD;
  //   this.docente.nombreD = selecion.nombreD;
  //   this.docente.apellidoPD = selecion.apellidoPD;
  //   this.docente.apellidoMD= selecion.apellidoMD;


  //   this.posicion = i;
  // }

  constructor() { }

  ngOnInit(): void {
  }
  
}

