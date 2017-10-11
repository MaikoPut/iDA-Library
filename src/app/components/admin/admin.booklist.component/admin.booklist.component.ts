import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Book} from '../../../models/book.model';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store';
import * as BookActions from '../../../state-management/actions/book.actions';

@Component({
    selector: "app-admin-booklist-component",
    templateUrl: "./admin.booklist.component.html",
    styleUrls: ["./admin.booklist.component.scss"]
})

export class AdminBookListComponent{
    results: Observable<Book[]>;
    
    constructor(private store: Store<fromStore.State>){
        this.store.dispatch(new BookActions.FetchAllBooks());
        this.results = this.store.select(fromStore.getBooks);
    }
}