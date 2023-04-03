import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) {}
    register(data:any):Observable<any>{
      return this._http.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", data);
    }
  }

