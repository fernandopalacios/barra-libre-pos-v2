import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrlProducts: string = 'http://localhost:5234/products' //'http://localhost:3000/products';

  getProducts(): Observable<any>{
    return this.httpClient.get(this.apiUrlProducts);
  }

}
