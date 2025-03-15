import { Component, OnInit } from '@angular/core';
import { OneProductComponent } from '../one-product/one-product.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  imports: [OneProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allProductData: any;
  constructor(private myProducts: ProductsService) { }
  ngOnInit(): void {
    this.myProducts.getAllData().subscribe({
      next: (data) => {
        this.allProductData = data
        
      },
      error: (error) => {
        console.log(error);

      }
    })
  }
}
