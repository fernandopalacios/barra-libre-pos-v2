import { Route, RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { NgModule } from "@angular/core";

const routes: Route[] = [
    {
        path: '',
        component: OrdersComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ]
  })

export class OrdersRouterModule {}