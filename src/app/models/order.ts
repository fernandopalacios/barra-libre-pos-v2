import { Product } from "./product";

export class Order {
    id: number;
    products: Product[] = [];
    total!: number;
}
