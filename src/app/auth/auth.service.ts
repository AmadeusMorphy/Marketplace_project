import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MerchantService } from '../pages/merchant/merchant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _messageService: MessageService,
    private _merchantService: MerchantService
  ) { }

  onLogin(loginForm: any): Observable<any> {

    return this._httpClient.post(`${environment.serverAuth}login`, loginForm).pipe(
      tap((res: any) => {
        const User = res.user;
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', User.id);
        localStorage.setItem('userType', User.userType);
        localStorage.setItem('email', User.email);
        localStorage.setItem('theme', User.theme);
        localStorage.setItem('fullName', User.fullName);

        const userType = localStorage.getItem('userType');

        if (userType === 'merchant') {
          this._merchantService.getMerchantProfile().subscribe(
            (res: any) => {
              localStorage.setItem('fullName', res.full_name);
            }
          )
        }
        this.isAuthenticatedSubject.next(true);

        this._messageService.add({
          severity: 'success',
          summary: 'Logged in'
        });

      }, (error) => {
        console.error('Error during login:', error);
        this._messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: error.error?.message || 'Check your email and password.'
        });
      })
    );
  }

  onRegister(registerForm: any): Observable<any> {
    return this._httpClient.post(`${environment.serverAuth}register`, registerForm).pipe(
      tap((res: any) => {
        console.log("successfully registered: ", res);
      }, (error) => {
        console.error("Error stuff: ", error);
      }
      )
    )
  }

  onMerchantRegister(registerForm: any, headers: any): Observable<any> {
    return this._httpClient.post(`${environment.server}merchants/profile`, registerForm, { headers }).pipe(
      tap((res: any) => {
        console.log("successfully registered: ", res);
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
        localStorage.clear();
        console.log("Logged out: ");
        this.isAuthenticatedSubject.next(false);
        this._router.navigate(['/home']);
        console.error("Error stuff: ", error);
      })
    )
  }

  async updateAuthState(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}
