import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient = inject(HttpClient);
  url = "https://reqres.in/api/users.";
  constructor() { }

  getData(){
    return this.httpClient.get(this.url);
  }
}
