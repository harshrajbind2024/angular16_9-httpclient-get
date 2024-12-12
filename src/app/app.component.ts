import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'httpclient';
  softBook:Book[]=[];
   constructor(private bookservice:BookService ){

   }

    ngOnInit(): void {
      this.getsoftBooks();
    }

    getsoftBooks(){
      // this.bookservice.getBooksFromStore().subscribe(books=>{this./this.softBook=books})
      this.bookservice.getBooksFromStore().subscribe(books=>{this.softBook=books})

    }
}
