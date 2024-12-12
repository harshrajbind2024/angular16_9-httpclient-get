 import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http'

// new 
import { Observable } from 'rxjs';
// old
// 1 import { Observable } from 'rxjs/Observable';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
   bookUrl="/api/books";

  constructor(private http:HttpClient) { }

  // it's a service , that bookurl me api url lega 
  // Book[] it's a data type
  getBooksFromStore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }
 
  // use any type
  //   getBooksFromStore():Observable<any>{
  //   return this.http.get<any>(this.bookUrl);
  // }


}
