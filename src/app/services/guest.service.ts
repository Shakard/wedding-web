import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  url = environment.URL_API_BIBLIOTECA;
  
  constructor(private httpClient: HttpClient) { }

  update(url: string, data: any) {
    url = this.url + url;
    return this.httpClient.post(url, data);
  }
}
