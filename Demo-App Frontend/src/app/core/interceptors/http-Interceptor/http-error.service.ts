import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService implements HttpInterceptor {

  constructor(private _route:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
          catchError(err => {
              console.log(err);
              let errorMessage = `${err.status} : Invalid HTTP Request, Please Try Again !!!`;
              if (err.status === 602)
              {
                  errorMessage = `${err.status} : Please Dont use Any special Character`;
              }
              else if(err.status === 401)
              {
                 this._route.navigate(['/']);
                 return throwError('Invalid HTTP Request, Please Try Again !!!');
              }
              else if(err.status === 402)
              {
                  errorMessage = `${err.status} : Please Enter Valid User Details`;
              }
              window.alert(errorMessage);
              return throwError('Invalid HTTP Request, Please Try Again !!!');
          })
        );
  }
}
