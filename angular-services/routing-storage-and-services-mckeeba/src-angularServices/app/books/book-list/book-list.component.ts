import { Component,OnInit}  from '@angular/core';
import { Book } from '../book';
//import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [];
 
  constructor(private bookService:BookService){}
   ngOnInit(): void {
   
   this.books = this.bookService.getBooks(); 
 
   }
}
