import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        children: [
            {
                path: 'orders',
                loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule),
            },
        ]
    }
];
