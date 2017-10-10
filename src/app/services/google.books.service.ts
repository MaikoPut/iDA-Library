import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from '../models/book.model';

@Injectable()
export class GoogleBooksService {
    path: string;
    headers: Headers;

    constructor(private http: Http, private router: Router) {
        this.path = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
        this.headers = new Headers({'Content-Type': 'application/json'});
    }

    getBookByISBN(isbn: string) {
       return this.http.get(this.path+isbn).map((response: Response)=> response.json().items[0].volumeInfo);
    }

}
