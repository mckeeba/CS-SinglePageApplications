import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit
{
 book:Book | undefined;

 constructor(private route: ActivatedRoute,private bookService:BookService){}

 
 ngOnInit(): void 
 {

  this.route.paramMap.subscribe((params)=>
  {
    const isbn = params.get('isbn');

    if(isbn)
    {
      this.book = this.bookService.getBookISBN(isbn);
    }

  });
        
 }
 


}
