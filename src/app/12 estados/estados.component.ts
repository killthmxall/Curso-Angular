import { Component } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent {
  
  persona = {
    nombre: '',
    edad: ''
  };

  enviar_formulario(){
    console.log(this.persona)
  }

}
