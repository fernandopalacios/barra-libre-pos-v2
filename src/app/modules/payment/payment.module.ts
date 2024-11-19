import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CashPaymentComponent } from './cash-payment/cash-payment.component';
import { TransferPaymentComponent } from './transfer-payment/transfer-payment.component';
import { MixedPaymentComponent } from './mixed-payment/mixed-payment.component';
import { NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    KeypadComponent,
    CardPaymentComponent,
    CashPaymentComponent,
    PaymentMethodComponent,
    TransferPaymentComponent,
    MixedPaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbNavModule
  ],
  exports: [
    KeypadComponent,
    CardPaymentComponent,
    CashPaymentComponent,
    PaymentMethodComponent,
    TransferPaymentComponent,
    MixedPaymentComponent
  ]
})
export class PaymentModule { }
