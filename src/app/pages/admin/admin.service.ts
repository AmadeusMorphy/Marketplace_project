import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _httpClient: HttpClient
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private getHeaders(): HttpHeaders {
    if (this.isBrowser) {
      const token = localStorage.getItem('token');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getStores(): Observable<any> {

    if (this.isBrowser) {
      return this._httpClient.get(`${environment.server}stores/all`, { headers: this.getHeaders() })
    }
    return of(null);
  }

  updateStore(storeId: any, storeData: any): Observable<any> {
    if (this.isBrowser) {
      return this._httpClient.put(`${environment.server}stores?id=${storeId}`, storeData, { headers: this.getHeaders() });
    }
    return of(null);
  }
}
