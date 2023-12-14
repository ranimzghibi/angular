// data.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})



export class DataService {
  private API_URL = 'http://localhost:3000/products';

  public async getProducts(): Promise<Product[]> {
    const response = await axios.get(this.API_URL);
    return response.data;
  }

  public async createProduct(product: Product): Promise<Product> {
    const response = await axios.post(this.API_URL, product);
    return response.data;
  }

  public async updateProduct(id: string, product: Product): Promise<Product> {
    const response = await axios.put(`${this.API_URL}/${id}`, product);
    return response.data;
  }

  public async deleteProduct(id: string): Promise<void> {
    await axios.delete(`${this.API_URL}/${id}`);
  }
}
