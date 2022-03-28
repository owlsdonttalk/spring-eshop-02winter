import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../model/page";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  public findAll():Observable<Page>{
      return this.http.get<Page>('http://localhost:8082/api/v1/product/all');
  }
}
