import {Component, OnDestroy, AfterViewChecked} from '@angular/core';

import {Store} from '@ngrx/store';
import * as fromStore from '../../../state-management/reducers/store';
import * as BookActions from '../../../state-management/actions/book.actions';
import * as Instascan from 'instascan';

@Component({
  selector: 'book-loan-qr',
  templateUrl: './book-loan-by-qr.component.html',
  styleUrls: ['./book-loan-by-qr.component.scss']
})

export class BookLoanQRComponent implements OnDestroy, AfterViewChecked{
  private scanner: Instascan.Scanner;

  constructor(private store: Store<fromStore.State>) {
  }

  ngAfterViewChecked() {
    const self = this;
    this.scanner = new Instascan.Scanner({continuous: true, video: document.getElementById('preview'),
                                          refractoryPeriod: 5000, scanPeriod: 1, mirror: false});

     this.scanner.addListener('scan', function(content, image){
      self.store.dispatch(new BookActions.GetBookWQR(content));
    });

    Instascan.Camera.getCameras().then(function(cameras){
      if (cameras.length === 2) {
        self.scanner.start(cameras[1]);
      } if (cameras.length === 1) {
        self.scanner.start(cameras[0]);
      } else {
        console.log('no cameras found');
      }
    });
  }

  ngOnDestroy() {
    this.scanner.stop();
  }
}
