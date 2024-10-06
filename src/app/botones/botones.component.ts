import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})

export class BotonesComponent {

  // Se define una propiedad para cambiar los colores de los textos
  text_color:string = '';

  //Se define una propiedad para Activar o desactivar los botones
  button_disable:boolean = false;

}