import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importar el componente Contador
import { ContadorComponent } from './contador/contador.component';
import { ContadorcliComponent } from './contadorcli/contadorcli.component';
import { TestComponent } from './test/test.component';
import { BotonesComponent } from './botones/botones.component';
import { MetodosComponent } from './3 metodos/metodos.component';
import { InterpolacionComponent } from './1 interpolacion/interpolacion.component';
import { InterfacesComponent } from './2 interfaces/interfaces.component';
import { ClassBindingComponent } from './4 class-binding/class-binding.component';
import { PropertyBindingComponent } from './5 property-binding/property-binding.component';
import { VariablesPlantillaComponent } from './6 variables-plantilla/variables-plantilla.component';
import { DirectivasComponent } from './7 directiva-ng-If/directivas.component';
import { DirectivaNgForComponent } from './8 directiva-ng-for/directiva-ng-for.component';
import { DirectivaSwitchComponent } from './9 directiva-switch/directiva-switch.component';
import { FormPlantillaComponent } from './10 form-plantilla/form-plantilla.component';
import { ValidacionesComponent } from './11 validaciones/validaciones.component';

/* Se importa un nuevo módulo para el manejo de la directiva [(ngModel)]*/
import { FormsModule } from '@angular/forms';
import { EstadosComponent } from './12 estados/estados.component';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorcliComponent,
    TestComponent,
    BotonesComponent,
    MetodosComponent,
    InterpolacionComponent,
    InterfacesComponent,
    ClassBindingComponent,
    PropertyBindingComponent,
    VariablesPlantillaComponent,
    DirectivasComponent,
    DirectivaNgForComponent,
    DirectivaSwitchComponent,
    FormPlantillaComponent,
    ValidacionesComponent,
    EstadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /* <---- Se incluye el módulo importado */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
