import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { OrderType } from '../../../enums/OrderTypes';
import { Order } from '../../../models/order';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, tap, debounceTime } from 'rxjs';
@Component({
  selector: 'app-pos-order-config',
  standalone: false,
  templateUrl: './order-config.component.html',
  styleUrl: './order-config.component.scss',
})
export class OrderConfigComponent implements OnInit{
  @Input() order: Order;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;
  tableNumber:number;
  private _message$ = new Subject<string>();
  successMessage:string = '';

  constructor(private eventService: EventService, private cd:ChangeDetectorRef) {
    this._message$
    .pipe(
      takeUntilDestroyed(),
      tap((message) => (this.successMessage = message)),
      debounceTime(1500),
    )
    .subscribe(() => this.selfClosingAlert?.close());
  }
  
  setOrderType(orderType: OrderType) {
    this.order.orderType = orderType;
    this.eventService.emitSetOrderTypeEvent(orderType);
  }

  setTableNumber() {
    this.eventService.emitSetOrderTable(this.order.tableNumber);
  }

  ngOnInit(): void {
    this.eventService.displayTableAlertListener().subscribe({
      next: (message) => {
        if(message.length > 0) {
          this._message$.next(message);
        }
      }
    });
  }
}
