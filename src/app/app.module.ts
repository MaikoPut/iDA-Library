import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { QrScannerModule } from 'angular2-qrscanner';

import { routes } from './routes';
import { environment } from '../environments/environment';

import { BookEffects } from './state-management/effects/book.effects';
import { UserEffects } from './state-management/effects/user.effects';
import { reducers } from './state-management/reducers/store';

import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/authguard.service';
import { BookFilter } from './filters/book.filter';
import { AvailableFilter } from './filters/availability.filter';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { BookListComponent } from './components/books/book-list.component/book-list.component';
import { BookComponent } from './components/books/book.component/book.component'; 
import { BookLoanQRComponent } from './components/books/book-loan-by-qr.component/book-loan-by-qr.component';
import { LoginComponent } from './components/auth/login.component/login.component';
import { RegisterComponent } from './components/auth/register.component/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    BookLoanQRComponent,
    LoginComponent,
    RegisterComponent,
    BookFilter,
    AvailableFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([BookEffects, UserEffects]),
    QrScannerModule
  ],
  providers: [BookService, AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
