import { UserInterface } from './../login-page/login-page.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



// Doc: https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegistrationPageComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _loginService: LoginService,
    private _router: Router
  ) {
  }
  registrationForm: FormGroup = new FormGroup({});
  ngOnInit() {
    this.buildForm()
  }
  buildForm(): void {
    this.registrationForm = this._formBuilder.nonNullable.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegister(): void {
    console.log(this.registrationForm.getRawValue());
    const baseURL: string = 'https://api.realworld.io/api/users/login';
    this._http
      .post<{ user: UserInterface }>(baseURL,
        {
          user: this.registrationForm.getRawValue()
        }).subscribe((response) => {
          console.log("Response:", response);
          localStorage.setItem('token', response.user.token);
          this._loginService.currentUserSig.set(response.user);
          this._router.navigateByUrl('/landingPage');
        })
  }

}
