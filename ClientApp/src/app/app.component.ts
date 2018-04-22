import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
    this.auth.scheduleRenewal();

  }
}
