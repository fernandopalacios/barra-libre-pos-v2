import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import localeEsMx from '@angular/common/locales/es-MX';
import { AuthService } from '../services/auth.service';

registerLocaleData(localeEsMx, 'es-MX');

@Component({
  selector: 'app-pos-toolbar',
  standalone: true,
  imports: [DatePipe],
  providers: [
    { provide: LOCALE_ID, useValue: "es-mx" }
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  time = new Date();
  rxTime = new Date();
  intervalId:any;
  subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
