import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StreamService {
  datastream: Observable<string>;

  constructor() {}
  createStream() {
    this.datastream = new Observable((observer) => {
      //هيعت تلت قيم مثلا بعد كل شويه عشان اوضح اهميه الاوبسيفبول
      setTimeout(() => {
        //له تلت حالات اما ايرور او نيكست او كومبلييت اول نيكست معناها قيمه اولي والنيكست ال بعدها معناها قيمه تانيه وهكذا لحد اخر واحده وهي كومبلييت
        // لو حصل ايرور ببعت له ايرور وانت بتهندل التلت حالات دول ف السبسكريب
        observer.next('sent this first message');
      }, 1000);
      //second value sent with the observable
      setTimeout(() => {
        observer.next('sent this second message');
      }, 3000);

      //third value sent with the observable
      setTimeout(() => {
        observer.next('sent this third message');
      }, 5000);
      // observable is complete
      setTimeout(() => {
        observer.complete();
      }, 7000);
    });
    return this.datastream;
  }
}
