import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  token: any;
  merchantId: any;
  headers: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _httpClient: HttpClient
  ) { }

  getMerchantProfile(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const merchantId = localStorage.getItem('userId');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });

      return this._httpClient.get(`${environment.server}merchants/profile?id=${merchantId}`, { headers }).pipe(
        tap(
          (res: any) => {
            localStorage.setItem('storeId', res.stores[0].id)
            return res;
          }, error => {
            return error;
          }
        )
      )
    } else {
      return of(null);
    }
  }

  getMerchantStores(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {

      const token = localStorage.getItem('token');
      const storeId = localStorage.getItem('storeId');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });


      return this._httpClient.get(`${environment.server}stores?id=${storeId}`, { headers }).pipe(
        tap(
          (res: any) => {
            return res;
          }, (error) => {
            return error;
          }
        )
      )
    } else {
      return of(null);
    }
  }
  getMerchantProducts(): Observable<any> {
    // Check if the platform is browser-based
    if (!isPlatformBrowser(this.platformId)) {
      console.warn('Attempted to fetch merchant products in a non-browser environment.');
      return of(null);
    }

    const token = localStorage.getItem('token');
    const merchantId = localStorage.getItem('userId');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this._httpClient.get(`${environment.server}products/merchant?merchant_id=${merchantId}`, { headers });
  }


}