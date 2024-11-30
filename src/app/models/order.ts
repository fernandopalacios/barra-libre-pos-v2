import { OrderType } from "../enums/OrderTypes";
import { Product } from "./product";

export class Order {
    id: number;
    products: Product[] = [];
    total!: number;
    orderType: OrderType;
    tableNumber: number;
}
