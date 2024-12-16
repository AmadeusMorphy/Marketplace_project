import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {

  //IpUrl: https://api.ipify.org?format=json
  //locationByIp: 'http://ip-api.com/json/' //insert Ip after the slash

  constructor(
    private _httpClient: HttpClient
  ) { }

  getIpAdress(): Observable<any> {
    return this._httpClient.get(`${environment.IpUrl}`);
  }

  getLocationByIp(ipAddress: string): Observable<any> {
    return this._httpClient.get(`${environment.locationByIp}${ipAddress}`);
  }

  //FOR SSR 2 APIS HANDLED IN NODEJS
  getIpLocation_SSR(): Observable<any> {
    return this._httpClient.get(`${environment.server}ipLocation`);
  }
}
