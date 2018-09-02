import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {TextResponse} from "../models/text-response.model";
import {Username} from "../models/username";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<TextResponse> {
    return this.http.post<TextResponse>('clasiixer-client.herokuapp.com/register', user);
  }

  getUsername(): Observable<Username> {
    return this.http.get<Username>('clasiixer-client.herokuapp.com/currentUser');
  }

}
