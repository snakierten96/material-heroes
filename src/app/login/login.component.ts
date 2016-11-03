import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'mh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  setMessage (): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login (): void {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if ( this.authService.isLoggedIn ) {
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl : '/crisis-center/admin';
        this.router.navigate([redirect]);
      }
    });
  }

  logout (): void {
    this.authService.logout();
    this.setMessage();
  }
  
}
