import { Component } from '@angular/core';
import { UserCredentials } from '../../../models/user-credentials.model';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers/store';
import * as UserActions from '../../../state-management/actions/user.actions';

@Component({
    selector: 'app-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    userCredentials: UserCredentials = new UserCredentials('', '', '');
    repeatedPassword: string;
    passwordError: boolean;
    emailError: boolean;

    constructor(private store: Store<fromRoot.State>) {}

    register() {
        if (this.checkEmail()) {
            this.emailError = true;
        } if (this.checkPassword()) {
            this.passwordError = true;
      } if (!this.checkEmail() && !this.checkPassword()) {
            this.emailError = false;
            this.store.dispatch(new UserActions.Register(this.userCredentials));
        }
    }
    checkEmail() {
      if (this.userCredentials.email.split('@')[1] !== 'ida-mediafoundry.be') {
        return true;
      } else {
        this.emailError = false;
        return false;
      }
    }
    checkPassword() {
      if(this.userCredentials.password !== this.repeatedPassword){
        return true;
      } else {
        this.passwordError = false;
        return false;
      }
    }
}
