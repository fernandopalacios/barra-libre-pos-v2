import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let username = sessionStorage.getItem('user');
  let token = sessionStorage.getItem('token');
  if(token && username) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false
  }
};
