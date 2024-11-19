import { Component } from '@angular/core';

@Component({
  selector: 'app-pos-transfer-payment',
  standalone: false,
  templateUrl: './transfer-payment.component.html',
  styleUrl: './transfer-payment.component.scss'
})
export class TransferPaymentComponent {
  reference: string = '';
  setReferenceValue(reference: string) {
    this.reference = reference;
  }
}
