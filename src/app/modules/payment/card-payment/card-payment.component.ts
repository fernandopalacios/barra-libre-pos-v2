import { Component } from '@angular/core';

@Component({
  selector: 'app-pos-card-payment',
  standalone: false,
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.scss'
})
export class CardPaymentComponent {
  authorizationNumber: string = '';
  
  setAuthorizationNumberValue(value: string) {
    this.authorizationNumber = value;
  }
}
