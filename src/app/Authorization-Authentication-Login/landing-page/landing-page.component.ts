import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserInterface } from '../login-page/login-page.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink]
})
export class LandingPageComponent implements OnInit {
  private readonly baseURL: string = `https://api.realworld.io/api/user`
  public _loginService = inject(LoginService);
  private _httpClient = inject(HttpClient);
  ngOnInit(): void {
    this._httpClient
      .get<{ user: UserInterface }>(this.baseURL)
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          this._loginService.currentUserSig.set(response.user);
        },
        error: () => {
          this._loginService.currentUserSig.set(null);
        }
      })
  }
  onLogOut(): void {
    console.log("Log outing user...");
    localStorage.setItem('token', '');
    this._loginService.currentUserSig.set(null);
  }


}