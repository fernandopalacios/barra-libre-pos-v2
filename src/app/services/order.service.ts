import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/orders' : 'http://f2.barralibre.io/api/orders';
  private readonly token: string = "";
  headers: HttpHeaders;

  // apiUrl: string = 'http://localhost:3000/orders';
  constructor(private httpClient: HttpClient) {
    this.token = sessionStorage.getItem('token')!;
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  getOrders(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/active`, {headers: this.headers});
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

  setOrderType(orderId:number, orderType: number): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/order-type/${orderType}`, {});
  }
  
  setOrderTableNumber(orderId:number, tableNumber: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/table-number/${tableNumber}`, {});
  }
}
