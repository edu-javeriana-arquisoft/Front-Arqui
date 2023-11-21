import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Main AuthGuard for controlling the flow of the app
 * @param route 
 * @param state 
 * @returns 
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isLoggedIn){
    return true
  }
  return router.parseUrl("/login")
};