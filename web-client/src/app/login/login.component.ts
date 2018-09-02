import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthorizationService} from "../services/authorization.service";
import {TokenStorage} from "../shared/token-storage";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authorizationService: AuthorizationService,
              private tokenStorage: TokenStorage,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log("onSubimt");
    this.authorizationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // @ts-ignore
          this.tokenStorage.saveToken(data.token);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
        }
      )
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

}
