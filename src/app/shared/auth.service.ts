import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  login(data: any){
    return this.http.post(BASE_URL+'/', data);
  }

  register(data: any){
    return this.http.post(BASE_URL+'/', data);
  }


}
