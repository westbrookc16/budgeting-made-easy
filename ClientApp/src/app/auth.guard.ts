import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate() {
    if (this.auth.isLoggedIn())
      return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
