import { Component } from '@angular/core';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent {

  persona = {
    nombre: '',
    edad: ''
  };

  enviar_formulario(){
    console.log(this.persona)
  }

}
