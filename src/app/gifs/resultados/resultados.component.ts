import { Component } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent  {

  get resultados() {
    return this.gifsService.resultados;
  }
  constructor(private gifsService: GiftsService) { }


}
