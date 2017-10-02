import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import * as fromRoot from './state-management/reducers/store';
import * as BookActions from './state-management/actions/book.actions';
import * as UserActions from './state-management/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>, private router: Router) {
    this.store.dispatch(new BookActions.FetchAllBooks());
  }

  ngOnInit() {

  }

  logout() {
    this.store.dispatch(new UserActions.Logout());
  }
}
