import { Route, RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Route[] = [
    {
        path: '',
        component: OrdersComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })

export class OrdersRouterModule {}