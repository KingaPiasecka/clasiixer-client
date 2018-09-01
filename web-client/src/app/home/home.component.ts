import {Component, OnInit} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenStorage: TokenStorage,
              private authorizationService : AuthorizationService) {
  }

  ngOnInit() {

  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

}
