import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionStickersComponent } from './seccion-stickers/seccion-stickers.component';
import { SeccionGiftsComponent } from './seccion-gifts/seccion-gifts.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StickersComponent } from './stickers/stickers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeccionStickersComponent,
    SeccionGiftsComponent,
    GiftsComponent,
    StickersComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
