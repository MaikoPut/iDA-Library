import {Routes} from '@angular/router';
import {HomeComponent} from './components/home.component/home.component';
import {BookListComponent} from './components/books/book-list.component/book-list.component';
import {BookComponent} from './components/books/book.component/book.component';
import {BookLoanQRComponent} from './components/books/book-loan-by-qr.component/book-loan-by-qr.component';
import {LoginComponent} from './components/auth/login.component/login.component';
import {RegisterComponent} from './components/auth/register.component/register.component';
import {AuthGuard} from './services/authguard.service';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app-home-component'},
  {path: 'app-home-component', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'app-booklist-component', component: BookListComponent, canActivate: [AuthGuard]},
  {path: 'app-book-component/:id', component: BookComponent, canActivate: [AuthGuard]},
  {path: 'app-bookloanQR-component', component: BookLoanQRComponent, canActivate: [AuthGuard]},
  {path: 'app-login-component', component: LoginComponent},
  {path: 'app-register-component', component: RegisterComponent}
];
