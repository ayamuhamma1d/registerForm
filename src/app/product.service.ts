import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) {

   }
  getProducts(): Observable<any> {
    return this._httpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
  }
  getCategories(): Observable<any> {
    return this._httpClient.get('https://route-ecommerce.onrender.com/api/v1/categories')
  }
  getProductsDetails(id:string): Observable<any> {
    return this._httpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }
}
