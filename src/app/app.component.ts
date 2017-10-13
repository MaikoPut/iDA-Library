import {Component, ChangeDetectionStrategy} from '@angular/core';

import {Store} from '@ngrx/store';
import * as fromRoot from './state-management/reducers/store';
import * as BookActions from './state-management/actions/book.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new BookActions.FetchAllBooks());
  }
}
