import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn = false;
  user: Observable<firebase.User>;

  constructor(private router: Router, private auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  canActivate(): Observable<boolean> {
    return this.auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(auth => this.checkLogin(auth) ? true : this.router.navigate(['/app-login-component']));
  }

  checkLogin(auth: boolean) {
    if (auth && this.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
