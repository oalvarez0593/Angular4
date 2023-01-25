import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'parametros',
  templateUrl: './parametrosURL.component.html'
})
export class ParametrosURLComponent {
	public title = "Ejemplo primero sin parámetro en la URL"
  	public titulo = "Ejempli de variables por la URL";
  	public parametro;

  	constructor(
	private route : ActivatedRoute,
	private routes : Router
	){}

	ngOnInit(){
		this.route.params.forEach((params:Params)=>{
			this.parametro = params['page'];
		});
	}

	redireccion(){
		this.routes.navigate(['parametros/OmarAlvarez']);
	}

	redireccion2(){
		this.routes.navigate(['parametros']);
	}

}



