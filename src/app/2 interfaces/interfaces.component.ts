import { Component } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})

export class InterfacesComponent {

    persona:Persona = {
        nombre: 'Erick',
        edad: 22
    };

    interpolacion:string = "{{ }}"

}
