import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CatalogoCComponent } from './components/catalogo-c/catalogo-c.component';
import { RegUserComponent } from './components/reg-user/reg-user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'catalogo-c', component: CatalogoCComponent},
  {path: 'regUser', component: RegUserComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
