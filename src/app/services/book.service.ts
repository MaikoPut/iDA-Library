import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from '../models/book.model';

@Injectable()
export class BookService {
    path: string;
    headers: Headers;

    constructor(private http: Http, private router: Router) {
        this.path = 'https://59b14331ffff010011b4ef98.mockapi.io/books';
        this.headers = new Headers({'Content-Type': 'application/json'});
    }

    getAllBooks(): Observable<Book[]> {
        return this.http.get(this.path).map((response: Response) =>
        response.json().map(book => {
            return new Book(book);
        }));
    }

    getBookByQR(qr: string): Observable<Book> {
        return this.http.get(this.path).map((response: Response) =>
        response.json().map(book =>  new Book(book)).filter(book => book.qrcode === qr));
    }

    loanOutBook(book: Book): Observable<Book> {
        return this.http.put(this.path + '/' + book.id, JSON.stringify(book),
          {headers: this.headers}).map(response => new Book(response.json()));
    }

    bringBackBook(book: Book): Observable<Book> {
        return this.http.put(this.path + '/' + book.id, JSON.stringify(book),
          {headers: this.headers}).map(response => new Book(response.json()));
    }

    addBook(book: Book): Observable<Book> {
        return this.http.post(this.path, JSON.stringify(book),
          {headers: this.headers}).map(response => new Book(response.json()));
    }
}
