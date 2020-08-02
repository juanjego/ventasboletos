import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NoLoginGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
