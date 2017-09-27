import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../../../models/book.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store'; 
import * as Actions from '../../../state-management/actions/book.actions';

@Component({
    selector: 'booklist',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})

export class BookListComponent{
    results: Observable<Book[]>;
    loading: Observable<boolean>;
    bookToAdd: Book = new Book("");
    filter: string;
  
    constructor(private store: Store<fromStore.State>){
        this.results = this.store.select(fromStore.getBooks);
        this.loading = this.store.select(fromStore.getLoading);
        this.filter = "all";
    }

    ngOnInit(){
    }

    addBook() {
       this.store.dispatch(new Actions.AddBook(this.bookToAdd));
    }

    onFilterChange(value){
        this.filter = value;
    }
}