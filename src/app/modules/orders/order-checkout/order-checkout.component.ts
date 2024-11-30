import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { EventService } from '../../../services/event.service';
import { OrderType } from '../../../enums/OrderTypes';

@Component({
  selector: 'app-pos-order-checkout',
  standalone: false,
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss'
})
export class OrderCheckoutComponent {
  @Input() order: Order;

}
