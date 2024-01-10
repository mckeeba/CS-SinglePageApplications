import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookEntryComponent } from './books/book-entry/book-entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';
import { AngularRoutingModule } from './angular-routing';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookListComponent,
    BookPageComponent,
    BookEntryComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
   //AppRoutingModule,
   AngularRoutingModule,
   AngularMaterialModule,
   FormsModule,
   BrowserModule,
   BrowserAnimationsModule

  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
