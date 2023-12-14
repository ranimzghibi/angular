import { Component } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, switchMap, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div>{{counter}}</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  counter$ = interval(1000);
  start$ = new Subject<void>();
  stop$ = new Subject<void>();

  constructor() {
    this.start$
      .pipe(
        switchMap(() => this.counter$.pipe(takeUntil(this.stop$))),
        repeatWhen(() => this.start$)
      )
      .subscribe((val: number) => {
        this.counter = val;
      });
  }

  start() {
    this.start$.next();
  }

  stop() {
    this.stop$.next();
  }
}
