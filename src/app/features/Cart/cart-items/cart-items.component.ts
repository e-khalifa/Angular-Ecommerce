import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart-items',
  imports: [RouterModule,CommonModule],
  templateUrl: './cart-items.component.html',
  styles: ``
})
export class CartItemsComponent {
constructor(private myCart:CartService){
      this.cart=myCart.getCart();
      this.cartItems=myCart.cartItems;
      this.product=this.cartItems.find((item:any)=>item)
    }
     cart:any;
     cartItems:any;
     product:any;
     addToCart=(product:any)=>{   
         this.myCart.addToCart(product);
         console.log('cart length after: ',this.cart.length); 
         console.log("cart  ",this.cart);
       }
      removeFromCart=(product:any)=>{
        this.myCart.removeOneFromCart(product);
     }
     trashItem=(product:any)=>{
      this.myCart.deleteFromCart(product.id);
      console.log("item trashed", product.title);
     }
}
