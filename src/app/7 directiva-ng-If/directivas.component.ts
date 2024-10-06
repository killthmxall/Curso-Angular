import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  openAlert:boolean = false;

  mostrar_en_consola(name:string){
    console.log(name)
    this.openAlert = true; /* Cambia el valor de openAlert por true*/
  }

  isLoggedIn = false;
  

}
