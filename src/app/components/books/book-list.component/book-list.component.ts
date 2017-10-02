import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Book} from '../../../models/book.model';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store';
import * as Actions from '../../../state-management/actions/book.actions';

@Component({
  selector: 'app-booklist-component',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent {
  results: Observable<Book[]>;
  loading: Observable<boolean>;
  bookToAdd: Book = new Book('');
  bookFilter: string;
  avFilter: boolean;

  constructor(private store: Store<fromStore.State>) {
    this.results = this.store.select(fromStore.getBooks);
    this.loading = this.store.select(fromStore.getLoading);
    this.bookFilter = 'all';

    this.results.subscribe(res => console.log(res));
  }

  addBook() {
    this.store.dispatch(new Actions.AddBook(this.bookToAdd));
  }

  onBookFilterChange(value) {
    this.bookFilter = value;
    if (value === 'all') {
      this.avFilter = null;
    }
  }

  onAvailableFilterChange(value) {
    this.avFilter = value;
  }
}
