import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-seccion-stickers',
  templateUrl: './seccion-stickers.component.html',
  styleUrls: ['./seccion-stickers.component.css']
})
export class SeccionStickersComponent implements OnInit {

  stickers: any[]=[];

  constructor(private informacionService:InformacionService) { }

  ngOnInit(): void {
    this.informacionService.obtenerSticker().subscribe((response: any)=>{
      console.log(response);
      this.stickers=response.data;
    }); 
  }

}
