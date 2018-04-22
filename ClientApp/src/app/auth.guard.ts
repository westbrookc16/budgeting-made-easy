import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate() {
    if (this.auth.isAuthenticated())
      return true;
    else {
      this.auth.login();
      return false;
    }
  }

}
