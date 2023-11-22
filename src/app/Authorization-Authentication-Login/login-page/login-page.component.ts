import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

export interface UserInterface {
  email: string;
  token: string;
  username: string
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient,
    private _router: Router,
    private _loginService: LoginService
  ) {

  }
  ngOnInit() {
    this.buildForm();
  }



  buildForm() {
    this.loginForm = this._formBuilder.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const baseURL: string = 'https://api.realworld.io/api/users/login';
    this._httpClient
      .post<{ user: UserInterface }>(baseURL,
        {
          user: this.loginForm.getRawValue()
        }
      ).subscribe((response) => {
        console.log('Response:', response);
        localStorage.setItem('token', response.user.token);
        this._loginService.currentUserSig.set(response.user);
        this._router.navigateByUrl('/landingPage');
      })
  }

}
