import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Searchgifsresponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apiKey: string = 'zbwo0RHjJ9XO5e0QBiGxuLdDHbSDNBjd';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
// TODO: Cambiar any por su tipo correspondiente
  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // this._historial = localStorage.getItem('historial');
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)  || [];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }
  }

  buscarGift(query: string ='') {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this  ._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    console.log(params.toString());
    this.http.get<Searchgifsresponse>(`${this.servicioUrl}/search`, {params})
    .subscribe((resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    }
    );


  }
}
