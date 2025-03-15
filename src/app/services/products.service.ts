import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private myClient : HttpClient) { }

  private URLData = "http://localhost:5000/products"
  getAllData(){
    console.log(this.myClient.get(this.URLData));
    return this.myClient.get(this.URLData)
  }
  getProductById(id:number){
    return this.myClient.get(`${this.URLData}/${id}`);
  }
}
