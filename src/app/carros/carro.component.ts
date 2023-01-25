import { Component } from '@angular/core';
import { Carro } from './carro';
import { PeticionesService } from '../services/peticiones.service'; //importo la ruta donde se encuenta mi Servicio a consumir


@Component({
  selector: 'carro',
  templateUrl: './carro.component.html',
  styleUrls: ['../css/bootstrap.min.css'],
  providers: [PeticionesService]
  
})
export class CarroComponent {
  public coche:Carro;
  public coches:Array<Carro>;
  public articulos:string;

  constructor(private _peticionesService:PeticionesService){
    this.coche = new Carro("","","");
    this.coches = [
    	new Carro("Hyundai","2017","Blanco"),
    	new Carro("Nissan","2018","Gris")
    ];
  }

  ngOnInit(){
    console.log(this._peticionesService.getPrueba());
    this._peticionesService.getArticulos().subscribe(
        result => {
          this.articulos=result;
          if(!this.articulos){
            console.log("Error en el servidor");
          }
        },
        error => {
          var err  = <any>error;
          console.log(err);
        }
      );//subscribe se utiliza para poder capturar la respuesta del servicio.

  }

  Enviar(){
  	this.coches.push(this.coche);
  	console.log(this.coche);
  	this.coche = new Carro("","","");
  	console.log(this.coches);
  }
}
