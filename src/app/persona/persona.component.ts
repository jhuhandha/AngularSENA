import { Component, OnInit } from '@angular/core';

import { Persona } from './../model/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public persona : Persona = new Persona;
  public personas : Array<Persona> = [];
  public edit : boolean = false;
  public index: number = 0;

  constructor() { 
  }

  ngOnInit() {
  }

  guardar(){
    let per = new Persona();
    per.nombre = this.persona.nombre;
    per.telefono = this.persona.telefono;
    this.personas.push(per);
    this.limpiar();
  }

  eliminar(i:number){
    this.personas.splice(i,1);
  }

  editar(i:number){
    this.persona.nombre = this.personas[i].nombre;
    this.persona.telefono = this.personas[i].telefono;
    this.edit = true;
    this.index = i;
  }

  modificar(){
    this.personas[this.index].nombre = this.persona.nombre;
    this.personas[this.index].telefono = this.persona.telefono;
    this.index = 0;
    this.edit = false;
    this.limpiar();
  }

  limpiar(){
    this.persona.nombre ="";
    this.persona.telefono = null;
  }

}
