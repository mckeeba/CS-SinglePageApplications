import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarMode } from '@angular/material/progress-bar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockoutComponent } from './lockout/lockout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TableTimeComponent } from "./table-time/table-time.component";
import { NgFor, NgIf } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LockoutComponent,
        HeaderComponent,
        TableTimeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        NgIf, 
        NgFor,
        MatIconModule,
        MatProgressBarModule
      
    ]
})
export class AppModule { }
