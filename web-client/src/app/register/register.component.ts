import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {ValidationService} from "../services/validation.service";
import {AuthorizationService} from "../services/authorization.service";
import {TokenStorage} from "../shared/token-storage";

@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private alertService: AlertService,
              private authorizationService: AuthorizationService,
              private tokenStorage: TokenStorage) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      retypePassword: ['', Validators.required]
  }, {validator: ValidationService.matchingConfirmPasswords});
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success(data.message, true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
        }
      )

  }

  logOut() {
    console.log("LOGOUT");
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

}
