import { Component, OnInit } from '@angular/core';
import { OrdersListComponent } from "../orders-list/orders-list.component";
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order';
import { EventService } from '../../../services/event.service';
import { Product } from '../../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pos-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  ordersList: Order[] = []
  selectedOrder: Order;

  constructor(private orderService: OrderService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.addProductEventListener().subscribe(product => {
      if (this.selectedOrder) {
        this.orderService.addOrderProduct(this.selectedOrder.id, product).subscribe({
          next: (order) => {
            this.selectedOrder.products.push(order.products.pop());
            this.selectedOrder.total = order.total;
          }
        });
      }
    }
    );

    this.eventService.setPaymentMethodEventListener().subscribe(paymentMethod => {
      if (this.selectedOrder) {
        this.orderService.closeOrder(this.selectedOrder.id, paymentMethod).subscribe({
          next: (response) => {
            this.triggerAlert("success", "La orden ha sido cerrada correctamente");
            this.getOrders();
          }
        });
      }
    })

    this.getOrders();
  }

  createNewOrder() {
    this.orderService.createOrder().subscribe({
      next: (order) => {
        this.ordersList.push(order);
        this.selectedOrder = order;
      }
    })
  }

  private getOrders() {
    this.orderService.getOrders().subscribe((results: Order[]) => {
      this.ordersList = results;
      if (this.ordersList.length > 0) {
        this.selectedOrder = this.ordersList[0];
      }
    });
  }

  setSelectedOrder(order: Order) {
    this.selectedOrder = order;
    this.orderService.getOrderProducts(this.selectedOrder.id).subscribe({
      next: (products: Product[]) => {
        this.selectedOrder.products = products;
      }
    })
  }

  private triggerAlert(alertType: any, message: any) {
    Swal.fire({
      text: message,
      icon: alertType
    });
  }

}
