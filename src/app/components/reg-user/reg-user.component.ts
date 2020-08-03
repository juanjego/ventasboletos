import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent  {

  regUser: FormGroup;

  public rUser: Array<string> = [];
  item : string;
  public nombre: string="";
  public correo: string="";
  public contra: string ="";
  public registroNuevo: string="";

  constructor(
    public fb: FormBuilder
  ) {
    this.regUser = this.fb.group({
      
      nombre: ['', [Validators.required,Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required,Validators.minLength(8)]]
    });
    
  }

saveData(){
  alert(JSON.stringify(this.regUser.value));
}

registrar(values){
    console.log(values);
}

onSubmit(){
  this.registroNuevo = this.nombre +", "+ this.correo +", "+ this.contra;
  this.rUser.push(this.registroNuevo);
  console.log(this.rUser);
}



}
