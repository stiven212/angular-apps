import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../../gifs/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }
 

  constructor(private gifsService : GiftsService) { }

  buscar(query: string ='') { 
    console.log(query);

    this.gifsService.buscarGift(query);
  }

    
  
}
