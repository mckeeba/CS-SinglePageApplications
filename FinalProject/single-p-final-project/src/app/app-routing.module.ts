import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { GameideasComponent } from './gameideas/gameideas.component';
import { MakeCharacterComponent } from './make-character/make-character.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = 
[
  {path:'', component:NavComponent},
  {path:'about-me', component:AboutMeComponent},
  {path:'gameideas', component:GameideasComponent},
  {path:'make-character', component:MakeCharacterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
