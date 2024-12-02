import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  onLogin(loginForm: any): Observable<any> {

    return this._httpClient.post(`${environment.serverAuth}login`, loginForm).pipe(
      tap((res: any) => {


        const User = res.user;
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', User.id);
        localStorage.setItem('userType', User.userType);
        localStorage.setItem('email', User.email);
        console.log("Logged successfully: ", res);
        this._router.navigate(['/home']);
      }, (error) => {
        console.error("Error stuff: ", error);
      }
      )
    )
  }

  onRegister(registerForm: any): Observable<any> {
    return this._httpClient.post(`${environment.serverAuth}register`, registerForm).pipe(
      tap((res: any) => {
        console.log("successfully registered: ", res);
        this._router.navigate(['/login'])
      }, (error) => {
        console.error("Error stuff: ", error);

      }
      )
    )
  }
}
