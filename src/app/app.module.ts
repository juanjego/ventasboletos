import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ConciertosComponent } from './components/conciertos/conciertos.component';
import { Concierto2Component } from './components/concierto2/concierto2.component';
import { Concierto3Component } from './components/concierto3/concierto3.component';
import { Concierto4Component } from './components/concierto4/concierto4.component';
import { Concierto5Component } from './components/concierto5/concierto5.component';
import { Concierto6Component } from './components/concierto6/concierto6.component';
import { CompraboletosComponent } from './components/compraboletos/compraboletos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    UsuariosComponent,
    ConciertosComponent,
    Concierto2Component,
    Concierto3Component,
    Concierto4Component,
    Concierto5Component,
    Concierto6Component,
    CompraboletosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
