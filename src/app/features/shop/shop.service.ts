import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }


  public getCategoryList(){
    
    return this.http.get(BASE_URL+'/categories');
  }

  public getProductList(){
    
    return this.http.get(BASE_URL+'/products');
  }

  public subscribeNewsletter(data: any){
    return this.http.post(BASE_URL+'/newsletter', data);
  }
}
