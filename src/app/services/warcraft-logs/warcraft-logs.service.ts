import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarcraftLogsService {

  private PublicKey = '574bfcada6ed1ad1460bfe16ebd1de78';
  private BaseUrl = 'https://www.warcraftlogs.com:443/v1';

  constructor(private http: HttpClient) { }

  getFights(logId): Observable<any> {
    const apiUrl = `${this.BaseUrl}/report/fights/${logId}?api_key=${this.PublicKey}`;
    return this.http.get(apiUrl);
  }

  getDeaths(logId, startTime, endTime): Observable<any> {
    const apiUrl = `${this.BaseUrl}/report/tables/deaths/${logId}?start=${startTime}&end=${endTime}&api_key=${this.PublicKey}`;
    return this.http.get(apiUrl);
  }

  getTotalDamage(logId, startTime, endTime): Observable<any> {
    const apiUrl = `${this.BaseUrl}/report/tables/total-damage/${logId}?start=${startTime}&end=${endTime}&api_key=${this.PublicKey}`;
    return this.http.get(apiUrl);
  }
}
