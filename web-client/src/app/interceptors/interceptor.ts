import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorage} from "../shared/token-storage";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorage, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let baseUrl = 'clasiixer-server.herokuapp.com';
    let authReq = req;
    if (this.tokenStorage.getToken() != null) {
      authReq = req.clone({setHeaders: {Authorization: 'Bearer ' + this.tokenStorage.getToken()}, url: baseUrl + 'sdsdsd'}, );
    }
    return next.handle(authReq);
  }
}
