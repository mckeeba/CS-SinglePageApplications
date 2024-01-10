import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  links = [
    {path: 'about', name: 'About'},
    {path: 'books', name: 'Book List'},
    {path: 'books/new', name: 'New Book'}
  ]
}
