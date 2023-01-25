import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleador',
  templateUrl: './empleado.component.html',
  styleUrls: ['../css/bootstrap.min.css']
})

export class EmpleadosComponent {
 public empleado1 = "Omar Alvarez";
  public empleado2 = "Marty Esquivel";
  public empleado3 = "Daniel Alvarez";
  public empleado4 = "Valeria Ortega";
  public empleado5 = "Daniel Valencia";
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;

  public nombres:Array<string> = ["Omar", "Daniel", "Valeria", "Jimena"]; // Variable con tipo Array.
  public nombre:string;                     // Variable con tipo String.
  public edad:number;                       // Variable con tipo number.
  public sera:boolean;                        // Variable con tipo boolean.
  public cualquiera:Array<any> = ["Omar", 12, "Alvarez"];         // Variable con tipo Array pero que acepte String y Numero.
  comodin:any;                          // Variable de cualquier tipo, que acepta cualquier tipo de caracter. 


  constructor(){
    this.nombre = "Omar Alvarez";             // Constructor default de una clase, buenas practicas iniciarlizar las variables acá
    this.edad = 11;                     // y en la clase únicamente declarar las variables con sus respectivos tipos.
    this.sera = false;
    this.comodin = 10;
    this.empleado = new Empleado("Omar Alvarez", 24, "Ingeniero", true);
    this.trabajadores = [
      new Empleado("Daniel Valencia", 35, "Ingeniero", true),
      new Empleado("Valeria Ortega", 19, "Enfermera", false)
    ];
  }

  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
    this.cambiarNombre();
    this.cambiarEdad();
    this.cambiarSera();
    this.cambiarComodin();
    alert(this.nombre + ", tiene " + this.edad + " años" + " " + this.sera + " " + this.comodin); // En el ngOnInit las buenas practicas dicen 
    console.log(this.nombre + ", tiene " + this.edad + " años");  // que se deben acá cargar o mostrar las funciones creadas y no en el constructor.
    console.log(this.empleado);

    // DIFERENCIA ENTRE VARIABLE VAR Y LET

    /*
     La variable VAR es global, mientras que la variable LET cambia el valor de una variable únicamente en un bloque de código, 
     dentro de un for, ó un if por ejemplo.
    */

    var uno = 10;
    console.log("VALOR INICIAL DE LA VARIABLE ES " + uno);
  if(uno == 10){
    let uno = 15;
    console.log("DENTRO DEL IF " + uno);
  }
    console.log("FUERA DEL IF VUELVE A " +uno );


  }

  cambiarNombre(){      // Una función que lo que hace es cambiar el valor inicial de la variable nombre.
    this.nombre = "Valeria Ortega";
  }

  cambiarEdad(){      // Una función que lo que hace es cambiar el valor inicial de la variable edad.
    this.edad = 24;
  }

  cambiarSera(){      // Una función que lo que hace es cambiar el valor inicial de la variable Sera.
    this.sera = true;
  }

  cambiarComodin(){     // Una función que lo que hace es cambiar el valor inicial de la variable Comodin
    this.comodin = 11;
  }
}
