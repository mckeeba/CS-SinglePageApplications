import { Injectable } from "@angular/core";
import {Book} from './book';



@Injectable({
    providedIn:'root',
})

export class BookService
{

public bookList: Book[]=[];

storeBooks(book:Book)
{
    this.bookList.push(book);

    localStorage.setItem('books',JSON.stringify(this.bookList));
}

books: Array<Book> = [];

getBooks():Book[] 
{
    const booksString = localStorage.getItem('books');
     if(booksString!== null)
     {
      
      this.books=JSON.parse(booksString);
      
    }
    return booksString ? JSON.parse(booksString):[];
}

getBookISBN(isbn:string):Book|undefined
 {
    for(const book of this.books)
    {
        if(book.isbn===isbn)
        {
            return book;
        }
    }
    return undefined;
 }


}