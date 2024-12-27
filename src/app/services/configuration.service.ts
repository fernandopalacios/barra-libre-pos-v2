import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public bankAccount: any = {};
  public paymentMethod: any = {};

  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/configuration' : 'http://f2.barralibre.io/api/configuration';
  private readonly token: string = "";
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private httpClient: HttpClient, private router: Router) {
    this.token = sessionStorage.getItem('token')!;
    this.headers = this.headers.append('Authorization', `Bearer ${this.token}`);
  }

  getPaymentMethod() {
    return this.httpClient.get<any>(`${this.apiUrl}/payment-method/1`, { headers: this.headers });
  }

  getBankAccountInformation() {
    return this.httpClient.get<any>(`${this.apiUrl}/bank-account/1`, { headers: this.headers });
  }
}
