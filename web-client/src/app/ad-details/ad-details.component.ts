import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit, OnDestroy {
  id: number;
  constructor(private tokenStorage: TokenStorage,
              private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  logOut() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    return this.tokenStorage.getToken() != null;
  }

}
