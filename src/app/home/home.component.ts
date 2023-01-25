import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service'; //importo la ruta donde se encuenta mi Servicio a consumir

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
  
})
export class HomeComponent {
  public aviso:string;
  public varService:string;
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;
  public fecha;

  constructor(private _ropaService:RopaService)
  {
  	this.aviso="Pagina principal de la app";
    this.varService=this._ropaService.prueba();
    this.fecha = new Date('01/05/2017');
  }

  ngOnInit(){
  	console.log(this._ropaService.prueba());
    this.listado_ropa = this._ropaService.getRopa();

  }

  guardarRopa(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarRopa(index){
    this._ropaService.deleteRopa(index);
  }
}
