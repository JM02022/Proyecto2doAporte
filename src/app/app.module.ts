import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Componentes/side-bar/side-bar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarNotasComponent } from './Componentes/docente/registrar-notas/registrar-notas.component';
import { RegistrarAsistenciaComponent } from './Componentes/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistroAlumnosComponent } from './Componentes/administrador/registro-alumnos/registro-alumnos.component';
import { RegistroDocentesComponent } from './Componentes/administrador/registro-docentes/registro-docentes.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    PerfilComponent,
    RegistrarNotasComponent,
    RegistrarAsistenciaComponent,
    RegistroAlumnosComponent,
    RegistroDocentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //cambio
