import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading: boolean = false;
  public spinner$: Subject<any>;
  constructor() {
    this.spinner$ = new Subject<any>();
  }
  setLoading(loading: boolean): void {
    this.isLoading = loading;
  }
  getLoading(): boolean {
    return this.isLoading;
  }
  showSpinner() {
    this.spinner$.next(true);
  }
  hideSpinner() {
    this.spinner$.next(false);
  }

}