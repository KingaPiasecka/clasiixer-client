import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ad} from "../interfaces/ad";
import {CategoryRequest} from "./interfaces/category-request";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>('api/getAllAds');
  }

  public getFilterAds(request: CategoryRequest): Observable<Ad[]> {
    return this.http.post<Ad[]>('api/getFilterAds', request);
  }

}
