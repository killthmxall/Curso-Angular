import { Component } from '@angular/core';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent {

  numero:number = 1;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero += 1;
  }

}
