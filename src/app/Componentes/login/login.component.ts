import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosAlumnoService } from 'src/app/servicios/servicios-alumno.service';
import { alumno } from '../interfaces/alumno';
import { buscar } from '../interfaces/baseDeDatos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private alumnos: alumno[] = [];
  constructor(private service:ServiciosAlumnoService,private router: Router) {
    this.alumnos = service.getListaAlumnos();
   }
   login = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  public DatosCorrectos:boolean = false;
  validar(form: FormGroup):void{
    if(buscar(this.alumnos, this.login.value.usuario,this.login.value.contrasenia) > -1){
      this.router.navigate(['/perfil']);
    }
    else{
      console.log("datos incorrectos")
      this.DatosCorrectos = true;
      setTimeout(()=>{
        this.DatosCorrectos = false;
      },2000);
    }
    console.log(form)
    //https://www.flaticon.com/premium-icon/students_2995620?related_id=2995620&origin=search
  }
}
