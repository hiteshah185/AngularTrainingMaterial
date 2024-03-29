import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AuthState {
  isAuthenticated: boolean;
  name: string | undefined;
}
const defaultAuthState: AuthState = {
  isAuthenticated: false,
  name: undefined
}
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private authSub$ = new BehaviorSubject<AuthState>(defaultAuthState);
  public readonly auth$ = this.authSub$.asObservable();

  constructor() { }
  ngOnDestroy(): void {
    this.authSub$.next(defaultAuthState);
    this.authSub$.complete();
  }
  login(): void {
    this.authSub$.next({ isAuthenticated: true, name: 'MohanLal' });
    setTimeout(() => this.logout(), 100000); // ~1.5 min
  }
  logout(): void {
    this.authSub$.next(defaultAuthState);
  }
}
