import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/admin';
import { Product } from 'src/models/product';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3000/user';
  
  private ProductUrl ='http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.username}`, user);
  }


  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ProductUrl);
  }
  public addProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(this.ProductUrl, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.ProductUrl}/${product.id}`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    const url = `${this.ProductUrl}/${id}`;
    return this.http.delete<void>(url);
  }
   
}
