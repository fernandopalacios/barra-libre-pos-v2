import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRouterModule } from './orders-router.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderService } from '../../services/order.service';
import { provideHttpClient } from '@angular/common/http';
import { ProductsModule } from '../products/products.module';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { EventService } from '../../services/event.service';
import { PaymentModule } from '../payment/payment.module';
import { ToolbarComponent } from '../../toolbar/toolbar.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrderCheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    PaymentModule,
    OrdersRouterModule,
    ToolbarComponent
  ],
  providers: [
    OrderService,
    EventService,
    provideHttpClient()
  ],
  exports: [
    OrdersComponent,
    OrdersListComponent,
    OrderCheckoutComponent
  ]
})
export class OrdersModule { }
