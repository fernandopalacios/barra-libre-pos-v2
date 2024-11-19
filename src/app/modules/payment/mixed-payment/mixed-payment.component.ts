import { Component } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pos-mixed-payment',
  standalone: false,
  templateUrl: './mixed-payment.component.html',
  styleUrl: './mixed-payment.component.scss'
})
export class MixedPaymentComponent {

  showCashPayment: boolean = true;
  showCardPayment: boolean = false;

  authorizationNumber: string = '';
  orderTotalString: string = '';
  cashPaymentString: string = '';
  cashChangeString: string = '';

  active:any;
	disabled = true;

	onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 3) {
			changeEvent.preventDefault();
		}
	}

  setPaymentValue(value: string) {

  }
}
