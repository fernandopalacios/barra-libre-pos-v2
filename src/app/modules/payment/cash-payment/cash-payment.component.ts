import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pos-cash-payment',
  standalone: false,
  templateUrl: './cash-payment.component.html',
  styleUrl: './cash-payment.component.scss'
})
export class CashPaymentComponent {
  @Input() orderTotal: number = 0;
  cashPayment: number = 0;
  cashChange: number = 0;
  
  orderTotalString = '$0.00';
  cashChangeString = '$0.00';
  cashPaymentString = '$0.00';
  
  ngOnInit(): void {
    this.formatAmountsIntoCurrency();
  }

  private formatAmountsIntoCurrency() {
    this.cashChangeString = this.cashChange.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'});
    this.cashPaymentString = this.cashPayment.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'});
    this.orderTotalString = this.orderTotal.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'});
  }

  setPaymentValue(value: string) {
    this.cashPayment = value ? parseFloat(value) : 0;
    this.cashChange = this.cashPayment ? (this.cashPayment - this.orderTotal) : 0;
    this.formatAmountsIntoCurrency();
  }
}
