import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['../css/bootstrap.min.css']
  
})
export class PlantillasComponent {
   public titulo:string;
   public administrador:boolean;

  constructor(){
    this.titulo = "Plantillas de Angular 4 utilizando el ngTemplate";
    this.administrador = true;
  }

  cambiar(valor){
  	this.administrador = valor
  }
}
