import { Component } from '@angular/core';

/* Se importa la interfaz persona creada en el archivo persona.ts */
import { Persona } from '../persona';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})

export class DirectivaNgForComponent {
  /* Se importa la interfaz persona */
    personas: Persona[] = [
      /* Se definen varias personas que cumplan con la estructura de la interfaz persona */
      { nombre: 'Erick', edad: 22},
      { nombre: 'Andrea', edad: 22},
      { nombre: 'Jon', edad: 55},
      { nombre: 'Alexa', edad: 25}
    ];
}
