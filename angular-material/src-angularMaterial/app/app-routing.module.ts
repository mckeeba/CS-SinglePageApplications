import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockoutComponent } from './lockout/lockout.component';

const routes: Routes = [{ path: 'lockout', component: LockoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
