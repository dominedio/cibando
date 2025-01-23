import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).islogged() ? true : inject(Router).navigateByUrl('/login');
};

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAdmin() ? true : inject(Router).navigateByUrl('/home');
};
