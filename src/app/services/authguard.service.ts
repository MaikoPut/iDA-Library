import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

import { Store } from '@ngrx/store';
import * as fromStore from '../state-management/reducers/store';
import * as UserActions from '../state-management/actions/user.actions';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {
    isLoggedIn: boolean= false;
    user: Observable<firebase.User>

    constructor(private router: Router, private auth: AngularFireAuth, private store: Store<fromStore.State>) { 
        this.user = auth.authState;
        auth.authState.subscribe(res => {if(res != null){this.store.dispatch(new UserActions.LoginDone(res.uid))}});
    }

    canActivate(): Observable<boolean> {
        return this.auth.authState
            .take(1)
            .map(authState => !!authState)
            .do(auth => auth ? true : this.router.navigate(['/login']));
    }
}