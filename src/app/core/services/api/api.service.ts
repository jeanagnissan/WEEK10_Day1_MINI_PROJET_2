import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment.dev';
import { endPoint } from '../../enum/endPoint.ressource';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(endPoint: string): any {
    return this.http.get(`${environment.BASE_URL}${endPoint}`, { headers: this.headerHttp() });
  }

  Count(endPoint : string): any {
    return this.http.get(`${environment.BASE_URL}${endPoint}`, {headers : this.headerHttp()});
  }

  post(parameter: Required<{ endPoint: string, data: any }>) {
    return this.http.post(`${environment.BASE_URL}${parameter.endPoint}`, parameter.data, { headers: this.headerHttp() });
  }

  headerHttp() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json'
    })
  }
}
