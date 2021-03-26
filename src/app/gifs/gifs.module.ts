import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [BusquedadComponent, GifsPageComponent, ResultadosComponent],
  exports:[GifsPageComponent],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
