import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/configuration' : 'http://f2.barralibre.io/api/configuration';
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private httpClient: HttpClient, private router: Router) { }

  getPaymentMethod() {
    return this.httpClient.get<any>(`${this.apiUrl}/payment-method/1`);
  }

  getBankAccountInformation() {
    return this.httpClient.get<any>(`${this.apiUrl}/bank-account/1`);
  }
}
