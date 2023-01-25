import { Component } from '@angular/core';
import { Persona } from './personas'; 

@Component({
  selector: 'personal',
  templateUrl: './personas.component.html'
})
export class PersonasComponent {
	public persona:Persona;
	public personas:Array<Persona>;
	public externo:boolean;
	public color:string;
	public colorSeleccionado:string;

	constructor(){
		this.persona = new Persona("Omar Alvarez", 24, "Curridabat");
		this.personas = [
			new Persona("Daniel Valencia", 35, "San Ramon"),
			new Persona("Marty Esquivel", 49, "Tilaran")
		];
		this.externo=false;
		this.color="green";
		this.colorSeleccionado="#ccc";

	}

	ngOnInit(){
		console.log(this.persona);
		console.log(this.personas);
	}

	cambiarExterno(valor){
		this.externo = valor;
	}
}
