import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(public http: HttpClient) { }

  postdata(url,env){
    return this.http.post(url,env);
  }
}
