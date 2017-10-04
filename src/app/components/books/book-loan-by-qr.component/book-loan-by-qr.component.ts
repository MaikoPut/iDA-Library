import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store';
import * as BookActions from '../../../state-management/actions/book.actions';

@Component({
  selector: 'bookLoanQR',
  templateUrl: './book-loan-by-qr.component.html',
  styleUrls: ['./book-loan-by-qr.component.scss']
})

export class BookLoanQRComponent implements OnDestroy {

  constructor(private store: Store<fromStore.State>, private router: Router) {

  }

  decodedOutput(event) {
    this.store.dispatch(new BookActions.GetBookWQR(event));
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
