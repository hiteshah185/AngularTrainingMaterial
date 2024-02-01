import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginDetails } from '../model/person-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userCredential: {
    username: string,
    password: string
  }
    = { username: '', password: '' };
  constructor(
    private _loginService: LoginService
  ) { }
  login() {
    const currentUser: LoginDetails = {
      username: this.userCredential.username,
      password: this.userCredential.password
    }
    this._loginService.login(currentUser);
    this._loginService.setUserLogTime(Date.now());
  }

}
