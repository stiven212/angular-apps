import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {


  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GiftsService) { }
  buscar() {
    
    const valor =this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
      this.gifsService.buscarGift(valor);
      
      this.txtBuscar.nativeElement.value = '';
  }

}
