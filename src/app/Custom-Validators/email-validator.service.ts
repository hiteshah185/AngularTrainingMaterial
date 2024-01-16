import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {
//private emailPattern = "^[a-z0-9._%+-]+@[teranet]+\.[a-z]{2,4}$";

  static required():ValidatorFn{
    let emailPattern = new RegExp('^[a-z0-9._%+-]+@[teranet]+\.[a-z]{2,4}$');
    return (control:AbstractControl ):ValidationErrors | null =>{
      return emailPattern.test(control.value) ? null : {'isTeranetEmail':true};
    }
  }
}
    