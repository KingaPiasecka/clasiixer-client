import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static matchingConfirmPasswords(abstractControl: AbstractControl) {
    let password = abstractControl.get('password').value;
    let retypePassword = abstractControl.get('retypePassword').value;

    if (password === retypePassword) {
      return null;
    } else {
      abstractControl.get('retypePassword').setErrors({MatchPassword: true})
    }
  }

}
