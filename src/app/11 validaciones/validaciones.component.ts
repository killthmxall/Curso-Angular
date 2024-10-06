import { Component } from '@angular/core';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent {
  
  persona = {
    nombre: '',
    edad: ''
  };

  enviar_formulario(){
    console.log(this.persona)
  }

}
