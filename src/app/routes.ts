import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { BookListComponent } from './components/books/book-list.component/book-list.component';
import { BookComponent } from './components/books/book.component/book.component';
import { BookLoanQRComponent } from './components/books/book-loan-by-qr.component/book-loan-by-qr.component';
import { LoginComponent } from './components/auth/login.component/login.component';
import { RegisterComponent } from './components/auth/register.component/register.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'booklist', component: BookListComponent, canActivate: [AuthGuard]},
    { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
    { path: 'bookloanQR', component: BookLoanQRComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];