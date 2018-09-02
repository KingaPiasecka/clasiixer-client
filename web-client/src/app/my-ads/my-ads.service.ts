import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ad} from "../interfaces/ad";
import {TextResponse} from "../models/text-response.model";

@Injectable({
  providedIn: 'root'
})
export class MyAdsService {

  constructor(private http: HttpClient) { }

  public getMyAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>('/api/myAds');
  }

  public deleteAd(id: number): Observable<TextResponse> {
    return this.http.delete<TextResponse>('/api/deleteAd/' + id);
  }

}