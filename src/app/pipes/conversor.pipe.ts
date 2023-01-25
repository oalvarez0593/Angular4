import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'  
})
export class ConversorPipe implements PipeTransform{
  transform(value1, value2){
    let valor1 = parseInt(value1);
    let valor2 = parseInt(value2);

    let result = "El resultado de multiplicar " + valor1 + " x " + valor2 + " es de: " + (valor1 * valor2);

    return result;
  }
}
