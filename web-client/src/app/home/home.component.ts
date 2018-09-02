import {Component, OnInit} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private tokenStorage: TokenStorage,
              private authorizationService : AuthorizationService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      customWord: ['',],
      location: ['',],
      category: ['',]
    });
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

  onSubmit() {
    this.router.navigate(['/category']);
  }

}
