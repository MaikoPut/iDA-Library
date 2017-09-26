import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import * as BookActions from "../actions/book.actions";
import { BookService } from "../../services/book.service";

@Injectable()
export class BookEffects {

    constructor(private actions$: Actions,
                private bookService: BookService,
                private router: Router){}

    @Effect()
    getAllBooks$: Observable<Action> = this.actions$.ofType(BookActions.FETCH_ALL_BOOKS)
                .switchMap(() =>{
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results))
    });

    @Effect()
    loanBook$: Observable<Action> = this.actions$.ofType(BookActions.LOAN_BOOK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.loanOutBook(book)
                    .map(book => new BookActions.LoanBookDone());
                });

    @Effect()
    loanBookDone$: Observable<Action> = this.actions$.ofType(BookActions.LOAN_BOOK_DONE)
                .map(toPayload)
                .switchMap(query => {
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results));
                });

    @Effect()
    bringBackBook$: Observable<Action> = this.actions$.ofType(BookActions.BRING_BACK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.bringBackBook(book)
                    .map(book => new BookActions.BringBackDone());
                });

    @Effect()
    bringBackBookDone$: Observable<Action> = this.actions$.ofType(BookActions.BRING_BACK_DONE)
                .map(toPayload)
                .switchMap(query => {
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results));
                });

    @Effect()
    addBook$: Observable<Action> = this.actions$.ofType(BookActions.ADD_BOOK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.addBook(book)
                    .map(result => new BookActions.AddBookDone(book));
                }); 
    
    @Effect()
    getBookWQR$: Observable<Action> = this.actions$.ofType(BookActions.GET_BOOK_W_QR)
                .map(toPayload)
                .switchMap(qr => {
                    return this.bookService.getBookByQR(qr)
                    .map(result => {this.router.navigate(["book/"+result[0].id]);return new BookActions.GetBookWQRDone(result[0])});
                })
 }
