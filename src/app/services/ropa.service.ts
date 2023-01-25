import { Injectable } from '@angular/core';


@Injectable()
	export class RopaService{
		public nombre_prenda:string;
		public coleccion_ropa:Array<string>;

		constructor(){
			this.nombre_prenda="Pantalones Jeans";
			this.coleccion_ropa=['Pantalones','Camisetas', 'medias'];
		}

		prueba(){
			return this.nombre_prenda;
		}

		addRopa(nombre_prenda){
			this.coleccion_ropa.push(nombre_prenda);
			return this.getRopa();
		}

		deleteRopa(index){
			this.coleccion_ropa.splice(index, 1);
			return this.getRopa();
		}

		getRopa(){
			return this.coleccion_ropa;
		}
	}