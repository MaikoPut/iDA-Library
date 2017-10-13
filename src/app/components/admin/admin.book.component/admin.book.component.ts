import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../../models/book.model';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store';
import * as BookActions from '../../../state-management/actions/book.actions';

@Component({
  selector: 'admin-book-component',
  templateUrl: './admin.book.component.html',
  styleUrls: ['./admin.book.component.scss']
})

export class AdminBookComponent implements OnInit {
  book: Observable<Book>;
  loading: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<fromStore.State>) {
  }

  ngOnInit() {
    this.book = this.store.select(fromStore.getSelectedBook);
    this.loading = this.store.select(fromStore.getLoading);

    this.route.params.map(params => params.id)
      .do((id) => this.store.dispatch(new BookActions.GetBook(id)))
      .subscribe();
  }

  updateClicked(book) {
    this.store.dispatch(new BookActions.UpdateBook(book));
  }

}
