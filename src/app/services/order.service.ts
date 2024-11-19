import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = 'http://localhost:5180/orders';
  // apiUrl: string = 'http://localhost:3000/orders';
  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/active`);
  }

  createOrder(): Observable<any> {
    return this.httpClient.post(this.apiUrl, {});
  }

  addOrderProduct(orderId: number, payload: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${orderId}/products`, payload);
  }

  getOrderProducts(orderId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${orderId}/products`);
  }

  closeOrder(orderId: number, paymentMethod: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/${paymentMethod}`, {});
  }
}
