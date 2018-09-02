import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextResponse} from "../models/text-response.model";

@Injectable({
  providedIn: 'root'
})
export class PostAdService {

  constructor(private http: HttpClient) {
  }

  public postAd(file: File, postAdForm: any): Observable<TextResponse> {
    const form: FormData = new FormData();
    form.append("file", file);
    form.append('details', JSON.stringify(postAdForm));
    return this.http.post<TextResponse>('api/postAd', form);
  }

}
