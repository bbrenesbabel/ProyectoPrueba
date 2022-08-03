import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import { SeccionGiftsComponent } from './seccion-gifts/seccion-gifts.component';
import { SeccionStickersComponent } from './seccion-stickers/seccion-stickers.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {path:"Gifts", component:GiftsComponent},
  {path:"Stickers", component:StickersComponent},
  {path:"Home", component:HomeComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
