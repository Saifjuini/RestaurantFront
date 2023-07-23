import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from './ProductInterface/productInterface';
import { Category } from './Enumeration/Category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

 public ListProduct():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(`http://localhost:8080/product/listProducts`);
 }
  
 public getProductsByCategory(productCategory:Category):Observable<IProduct[]>{
  return this.http.get<IProduct[]>(`http://localhost:8080/product/category/${productCategory}`);
 }

}
