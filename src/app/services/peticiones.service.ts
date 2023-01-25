import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService{
	public msj:string;
	public url:string;
	public url2:string;

	constructor(private _http:Http){
		this.msj = "Mensaje de prueba desde el servicio";
		this.url = "https://jsonplaceholder.typicode.com/posts";
		this.url2 = "http://172.17.103.210:10039/BHDL_TDPD_Back_Rest_Validations/rest/customerValidation/validateCustomer?documentType=2&documentNumber=00117995225&userName=CD305136&bin=451700";
	}
	getPrueba(){
		return this.msj;
	}

	getArticulos(){
		return this._http.get(this.url)//Aquí obtengo la url del servicio.
						 .map(respuesta => respuesta.json()); // Acá con la propiedad map, capturo los valores del servicio y lo convierto a un fichero de tipo Json
	}
}