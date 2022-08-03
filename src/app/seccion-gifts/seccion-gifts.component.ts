import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-seccion-gifts',
  templateUrl: './seccion-gifts.component.html',
  styleUrls: ['./seccion-gifts.component.css']
})
export class SeccionGiftsComponent implements OnInit {

  gifts: any[]=[];

  constructor(private informacionService:InformacionService) {}



  ngOnInit(): void {
    this.informacionService.obtenerGift().subscribe((response: any)=>{
      console.log(response);
      this.gifts=response.data;
    }); 
  }

}
