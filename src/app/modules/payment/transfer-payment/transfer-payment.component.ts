import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../services/configuration.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-pos-transfer-payment',
  standalone: false,
  templateUrl: './transfer-payment.component.html',
  styleUrl: './transfer-payment.component.scss'
})
export class TransferPaymentComponent implements OnInit {

  constructor(private configService: ConfigurationService) {}

  reference: string = '';
  accountNumber: string = '';
  bankCode: string = '';
  bank: string = '';
  setReferenceValue(reference: string) {
    this.reference = reference;
  }

  ngOnInit(): void {
    this.configService.getBankAccountInformation().pipe(take(1)).subscribe({
      next: (response) => {
        this.accountNumber = response.accountNumber;
        this.bankCode = response.bankCode;
        this.bank = response.bank;
      }
    });
  }
}
