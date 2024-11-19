import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { Order } from '../../../models/order';

@Component({
  selector: 'app-pos-order-checkout',
  standalone: false,
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss'
})
export class OrderCheckoutComponent {
  @Input() order: Order;
}
