import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GoogleBooksService} from '../../../services/google.books.service';

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
  isbn:string;
  avFilter: boolean;
  searchString: string;

  constructor(private store: Store<fromStore.State>, private service: GoogleBooksService) {
    this.results = this.store.select(fromStore.getBooks);
    this.loading = this.store.select(fromStore.getLoading);
    this.bookFilter = 'all';
    this.searchString = '';
  }

  addBook() {
    this.store.dispatch(new Actions.AddBook(this.bookToAdd));
    this.bookToAdd = new Book('');
  }

  onBookFilterChange(value) {
    this.bookFilter = value;
    if (value === 'all') {
      this.avFilter = null;
      this.searchString = '';
    }
  }

  onAvailableFilterChange(value) {
    this.avFilter = value;
  }
  searchByTitle(value) {
    this.searchString = value;
  }

  searchISBN(value){
    if(value!="" && (value.length == 10 || value.length == 13)){
    this.service.getBookByISBN(value).subscribe(res =>{this.bookToAdd.title=res.title; this.bookToAdd.author=res.authors[0]; this.bookToAdd.description = res.description });
    } else{
      this.bookToAdd = new Book('');
    }
  }
}
