import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeProduct } from './fake-apimodels';

@Injectable({
  providedIn: 'root'
})
export class FakeAPIStoreService {

  private baseURL:string="https://fakestoreapi.com" 
  constructor(private _httpClient: HttpClient) { }

  public getProductListings():Observable< FakeProduct[]>{
    return this._httpClient.get<FakeProduct[]>(`${this.baseURL}/products`);
  }
  public getProductsById(productId:number):Observable<FakeProduct>{
    return this._httpClient.get<FakeProduct>(this.baseURL+"/products/"+productId);
  }
}
