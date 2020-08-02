import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import {ConciertosComponent} from './components/conciertos/conciertos.component'
import { Concierto2Component } from './components/concierto2/concierto2.component';
import { Concierto3Component } from './components/concierto3/concierto3.component';
import { Concierto4Component } from './components/concierto4/concierto4.component';
import { Concierto5Component } from './components/concierto5/concierto5.component';
import { Concierto6Component } from './components/concierto6/concierto6.component';
import { CompraboletosComponent } from './components/compraboletos/compraboletos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'conciertos', component:ConciertosComponent},
  {path: 'concierto2', component:Concierto2Component},
  {path: 'concierto3', component:Concierto3Component},
  {path: 'concierto4', component:Concierto4Component},
  {path: 'concierto5', component:Concierto5Component},
  {path: 'concierto6', component:Concierto6Component},
  {path: 'compraboletos',component:CompraboletosComponent},
  

  {path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
