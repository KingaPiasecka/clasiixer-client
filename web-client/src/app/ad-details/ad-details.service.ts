import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextResponse} from "../models/text-response.model";

@Injectable({
  providedIn: 'root'
})
export class AdDetailsService {

  constructor(private http: HttpClient) { }

  public getAdDetails(id: number): Observable<TextResponse> {
    return this.http.get<TextResponse>('/api/adDetails/${id}');
  }

}
