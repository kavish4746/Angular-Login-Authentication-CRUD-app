import { Injectable } from '@angular/core';
import { apiRoutes } from '../../../config/api-route-points';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public _http: HttpClient, private _route: Router) { }

  authenticateUser(item)
  {
    return this._http.post<any>(apiRoutes.User.AUTHENTIC_USER, item);
  }

  loggedIn(){
    const myToken = localStorage.getItem('token');
    return !!myToken && !helper.isTokenExpired(myToken);
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._route.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
