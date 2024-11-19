import { Component, Input, OnInit, output } from '@angular/core';
import { Order } from '../../../models/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-pos-orders-list',
  standalone: false,
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[] = []
  newOrder = output();
  @Input() selectedOrderId: number;
  selectedOrder = output<Order>();

  constructor(){}

  ngOnInit(): void { }

  clickSelectOrder(order: Order) {
    this.selectedOrderId = order.id;
    this.selectedOrder.emit(order);
  }
 
  clickNewOrderButton() {
    this.newOrder.emit();
  }

}
