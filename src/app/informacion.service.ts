import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  private servicioURL: string = 'https://developers.giphy.com/docs/api/endpoint#trending';
  private api_key: string = 'M2lERHmiHwvq3xcMPu5sxt2EMkIcM26B';
  private limit: number=15;
  private _historial: string[] = [];

  constructor(private Http:HttpClient) {}

    obtenerGift(){
      return this.Http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=25`);
    }
    
    obtenerSticker(){
      return this.Http.get('https://api.giphy.com/v1/stickers/trending?api_key=M2lERHmiHwvq3xcMPu5sxt2EMkIcM26B&limit=25');
    }
   }
