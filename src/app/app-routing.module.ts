import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarAsistenciaComponent } from './Componentes/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotasComponent } from './Componentes/docente/registrar-notas/registrar-notas.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { SideBarComponent } from './Componentes/side-bar/side-bar.component';

const routes: Routes = [
  {
      path:'', redirectTo : 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'registrar-notas',
    component: RegistrarNotasComponent
  },
  {
    path: 'registrar-asistencia',
    component: RegistrarAsistenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
