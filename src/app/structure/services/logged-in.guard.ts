import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'; 

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {}

canActivate() {
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

 if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}