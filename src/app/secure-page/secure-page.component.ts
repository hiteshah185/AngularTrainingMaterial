import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-secure-page',
  templateUrl: './secure-page.component.html',
  styleUrls: ['./secure-page.component.scss']
})
export class SecurePageComponent {
  constructor(
    private _loginService: LoginService
  ) { }

  onLogOut() {
    this._loginService.logOut();
  }
}
