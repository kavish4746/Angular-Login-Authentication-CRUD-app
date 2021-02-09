import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../core/services/login/login.service';
import { Router} from '@angular/router';
import { loginClass } from 'src/app/Shared/Classes/loginClass';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj = {} as loginClass;

  data:{
    token:''
  }
  constructor(private loginService: LoginService,private _route:Router) { }

  loginUser(){
    this.loginService.authenticateUser(this.loginObj).subscribe( res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this._route.navigate(['/home'])
    });
  }
  ngOnInit(): void {
  }

}
