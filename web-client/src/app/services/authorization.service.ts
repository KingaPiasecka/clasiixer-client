import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "../../../node_modules/@angular/common/http";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {TokenStorage} from "../shared/token-storage";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient,
              private route: Router,
              private tokenStorage: TokenStorage) { }

  login(user: User) {
    const credentials = {email: user.email, password: user.password};
    return this.http.post('/login',credentials, httpOptions);
  }

  logout() {
    this.tokenStorage.logout();
    this.route.navigate(['/login']);
  }

}
