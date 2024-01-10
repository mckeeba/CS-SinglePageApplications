import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookEntryComponent } from './books/book-entry/book-entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
    {path: '', redirectTo: 'books', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'books', component: BookListComponent},
    {path: 'books/new', component: BookEntryComponent},
    {path: 'book/:isbn', component: BookPageComponent},
    {path: '**', redirectTo: 'books', pathMatch: 'full'}
  ];

  

@NgModule({
  imports:[RouterModule.forRoot(routes)],
exports:[
RouterModule
  
]
})


export class AngularRoutingModule
{
 
}