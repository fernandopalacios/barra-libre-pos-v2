import { ChangeDetectorRef, Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { PaymentMethod, PaymentMethodName } from '../../../enums/PaymentMethodsEnum';
import { EventService } from '../../../services/event.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from '../../../services/configuration.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-pos-payment-method',
  standalone: false,
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent implements OnInit {
  @Input() orderTotal: number = 0;
  private modalService = inject(NgbModal);
  closeResult = '';
  modalTitle = '';
  selectedPaymentMehod: number = 0;

  authNumber: number | null = 0;
  reference: string = '';

  paymentMethods: any;

  constructor(private eventService: EventService, private cd: ChangeDetectorRef, private configService: ConfigurationService) { }

  ngOnInit(): void {
    this.configService.getPaymentMethod().pipe(take(1)).subscribe({
      next: (response) => {
        this.paymentMethods = response;
      }
    });
  }

  open(content: TemplateRef<any>, selectedPaymentMethod: number) {
    this.selectedPaymentMehod = selectedPaymentMethod;
    this.modalTitle = 'Pago con ' + this.completetModalTitle(selectedPaymentMethod);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  clickPayButton(paymentMethod: PaymentMethod) {
    this.eventService.emitSetPaymentMethodEvent(paymentMethod);
  }

  private completetModalTitle(paymentMethod: number): string {
    switch (paymentMethod) {
      case PaymentMethod.Cash:
        return PaymentMethodName.Cash;
      case PaymentMethod.Card:
        return PaymentMethodName.Card;
      case PaymentMethod.Transfer:
        return PaymentMethodName.Transfer;
      case PaymentMethod.Mixed:
        return PaymentMethodName.Mixed;
      default:
        return '';
    }
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
