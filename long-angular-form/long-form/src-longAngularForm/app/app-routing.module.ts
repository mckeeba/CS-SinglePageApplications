import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [

  
  {path:"",component:FormComponent},
  {path:"results/:teamName/:playerNumber/:mascot/:userEmail", component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
