import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  options;

  constructor(private http: HttpClient) {
    this.options = {
    }
  }

  get(url: string) {
    return this.http.get(url, this.options).toPromise();
  }
}
