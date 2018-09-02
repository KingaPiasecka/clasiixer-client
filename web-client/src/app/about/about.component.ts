import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private tokenStorage: TokenStorage,
              private authorizationService : AuthorizationService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

  logOut() {
    this.authorizationService.logout();
  }

}
