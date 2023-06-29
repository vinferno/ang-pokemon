import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(
    private http: HttpClient,
  ) { }
  getContents() {
    return this.http.get(this.baseUrl);
  }
  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }
}
