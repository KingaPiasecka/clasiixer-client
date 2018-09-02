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
    let authReq = req;
    if (this.tokenStorage.getToken() != null) {
      /*authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});*/
      const httpRequest = new HttpRequest(<any>req.method,'clasiixer-server.herokuapp.com');
      authReq = httpRequest.clone({setHeaders: {Authorization: 'Bearer ' + this.tokenStorage.getToken()}});

    }
    return next.handle(authReq);
  }
}
