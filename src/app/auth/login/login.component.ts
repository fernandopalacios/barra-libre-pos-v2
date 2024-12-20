import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pos-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [HttpClient, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  mainLogoUrl = '/images/main-logo.png';
  customerLogoUrl = '/images/customer-logo.png';
  
  constructor(private router:Router, private authService: AuthService){
    }

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );

  submitLogin() {
    this.authService.login(this.loginForm.value).pipe(take(1)).subscribe({
      next: (response) => {
        this.authService.setSession(response.username, response.token);
        this.router.navigate(['/orders']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
