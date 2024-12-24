import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly token: string = "";
  headers: HttpHeaders;

  // apiUrl: string = 'http://localhost:3000/orders';
  constructor(private httpClient: HttpClient) {
    this.token = sessionStorage.getItem('token')!;
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/products' : 'http://f2.barralibre.io/api/products';

  getProducts(): Observable<any> {
    return this.httpClient.get(this.apiUrl, { headers: this.headers });
  }

}
