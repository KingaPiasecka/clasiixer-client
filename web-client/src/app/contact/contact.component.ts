import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenStorage} from "../shared/token-storage";
import {AuthorizationService} from "../services/authorization.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
