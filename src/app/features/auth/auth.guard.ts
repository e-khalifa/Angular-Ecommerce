import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const userId = atob(token);
      if (!userId) {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error('Token error:', error);
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
