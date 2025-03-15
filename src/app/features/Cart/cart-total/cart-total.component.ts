import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cart-total',
  imports: [RouterModule,CommonModule],
  templateUrl: './cart-total.component.html',
  styles: ``
})
export class CartTotalComponent implements OnInit {
  total: number = 0;

  constructor(private myCart: CartService) {}

  ngOnInit() {
    
    this.myCart.cart$.subscribe((cart) => {
      this.total = this.myCart.getTotal(); 
    });

    this.total = this.myCart.getTotal();
  }
}