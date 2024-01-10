import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';

import { Router } from '@angular/router';
//import{RouterModule,Routes}from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})


export class BookEntryComponent {

  constructor(private router:Router, private bookService:BookService ){}

  public bookList: Book[]=[]; 

  addBook(form: NgForm) {

     const book:Book = new Book(form.value.title,form.value.blurb,form.value.author,form.value.isbn);
    
     
    // // retrieve books array from localStorage and store in bookString
    //  const booksString = localStorage.getItem('books');

    //  //if bookString is not null use JSOn to parse and 
    //  //assign the result to booklist
    //   if(booksString !== null)
    //   {
    //     this.bookList=JSON.parse(booksString);

    //   }
    //   //add the book to bookList
    //   this.bookList.push(book);

    this.bookService.storeBooks(book);

      this.router.navigate(['/books']);
    };
    
  
}
