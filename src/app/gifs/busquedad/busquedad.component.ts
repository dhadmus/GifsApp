import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busquedad',
  templateUrl: './busquedad.component.html',
  styles: [
  ]
})
export class BusquedadComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  //inyeccion de dependencias del aeevivio gifs
  constructor(private gifsService: GifsService){

  }
  buscar(){
    const valor= this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value="";
  }
}
