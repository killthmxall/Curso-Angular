import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})

export class ClassBindingComponent {

  // Se define una propiedad para cambiar los colores de un texto, cuya clase sea text_color
  text_color:string = '';

  //Se define una propiedad para Activar o desactivar los botones
  button_disable:boolean = false;

}
