// Importar el decorador Component
import { Component } from "@angular/core";

import { Persona } from '../persona';

// Llamar al decorador Component
@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']

}) //En esta parte marca un error,es necesario especificar una clase

// Una vez especificada la clase, será necesario exportarla
export class ContadorComponent {

    persona:Persona = {
        nombre: 'Erick',
        edad: 22
        
    };


    numero: number = 1;



}