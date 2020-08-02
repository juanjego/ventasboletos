import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  login: FormGroup;

  public tareas: Array<string> = [];
  item: string;
  public tarea: string="";
  public registro: string="";
  public mensaje: string ="";

  constructor(private router: Router){
   
}

  guardarArreglo(){
    this.tareas.push(this.item);
    this.item="";
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  
  mostrarArreglo(){
    this.tareas = JSON.parse(localStorage.getItem('tareas'));
  }
  login1(form: NgForm){
    console.log(form.value)
    if(form.value.email === 'usuario@gmail.com' && form.value.pass === "1234"){
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['/home']);
    }
  }
 

  
  registrar(values){
    console.log(values);
}

empty() {
  //empty your array
  this.tareas.length = 0;
}

/*
onSubmit(){
  this.registro =  this.tarea ;
  this.tareas.push(this.registro);
  console.log(this.tareas);
}*/
onDelete(){
  this.empty();
  console.log(this.tareas);
}

}
