import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  onLogin(loginForm: any): Observable<any> {

    return this._httpClient.post(`${environment.serverAuth}login`, loginForm).pipe(
      tap((res: any) => {


        const User = res.user;
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', User.id);
        localStorage.setItem('userType', User.userType);
        localStorage.setItem('email', User.email);
        this.isAuthenticatedSubject.next(true);
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

  onLogout(): Observable<any> {

    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this._httpClient.post(`${environment.serverAuth}logout`, {}, { headers }).pipe(
      tap((res: any) => {
        localStorage.clear();
        console.log("Logged out: ", res);
        this.isAuthenticatedSubject.next(false);
        this._router.navigate(['/home']);
      }, (error) => {
        console.error("Error stuff: ", error);
      })
    )
  }


  async updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}
