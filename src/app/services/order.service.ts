import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/orders' : 'http://f2.barralibre.io/api/orders';
  private readonly token: string = "";
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private httpClient: HttpClient) {
    this.token = sessionStorage.getItem('token')!;
    this.headers = this.headers.append('Authorization', `Bearer ${this.token}`);
  }

  getOrders(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/active`, {headers: this.headers});
  }

  createOrder(): Observable<any> {
    return this.httpClient.post(this.apiUrl, {}, { headers: this.headers });
  }

  addOrderProduct(orderId: number, payload: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${orderId}/products`, payload, { headers: this.headers });
  }

  getOrderProducts(orderId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${orderId}/products`, { headers: this.headers });
  }

  closeOrder(orderId: number, paymentMethod: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/payment-method/${paymentMethod}`, {}, { headers: this.headers });
  }

  setOrderType(orderId:number, orderType: number): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/order-type/${orderType}`, {}, { headers: this.headers });
  }
  
  setOrderTableNumber(orderId:number, tableNumber: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}/${orderId}/table-number/${tableNumber}`, {}, { headers: this.headers });
  }
}
