import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient : HttpClient) { }

  private URLData = "https://api.escuelajs.co/api/v1/products"
  getAllData(){
    return this.myClient.get(this.URLData)
  }
}
