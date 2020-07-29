import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
