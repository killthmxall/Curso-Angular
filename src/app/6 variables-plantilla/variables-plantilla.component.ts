import { Component } from '@angular/core';

@Component({
  selector: 'app-variables-plantilla',
  templateUrl: './variables-plantilla.component.html',
  styleUrls: ['./variables-plantilla.component.css']
})

export class VariablesPlantillaComponent {

  mostrar_en_consola(name:string){
    console.log(name)
  }
  
}
