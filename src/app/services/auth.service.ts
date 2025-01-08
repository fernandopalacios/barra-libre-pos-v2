import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = isDevMode() ? 'http://localhost:5248/api/authentication/' : 'http://f2.barralibre.io/api/authentication/';

  // private apiUrl = `${environment.apiUrl}authentication`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(payload: any) {
    return this.httpClient.post<any>(`${this.apiUrl}login`, payload);
  }
  
  setSession(user: string, token: string) {
    sessionStorage.setItem('user', user); 
    sessionStorage.setItem('token', token); 
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
