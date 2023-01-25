import { Component } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  public warning:string;

  constructor(){
  	this.warning="Esta es una página de error, por favor pongase en contacto con el administrador";
  }
}
