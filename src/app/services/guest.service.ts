import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  url = "https://backend.wedding-solvit.com/api/";
  
  constructor(private httpClient: HttpClient) { }

  get(url: string) {
    url = this.url + url;
    return this.httpClient.get(url);
  }

  getImages() {
    
    return this.httpClient.get<any>(this.url + 'images')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }

  update(url: string, data: any) {
    url = this.url + url;
    return this.httpClient.post(url, data);
  }
}
