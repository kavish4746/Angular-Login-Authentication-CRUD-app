import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { LoginService } from '../../services/login/login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService : LoginService,private _route: Router){}
    canActivate(): boolean{
      if(this._authService.loggedIn())
      {
        return true;
      }
      else
      {
        this._route.navigate(['/']);
        localStorage.removeItem('token');
        return false;
      }
    }
}
