import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any[]=[];
  private cartSubject = new BehaviorSubject<any[]>(this.cartItems);
  cart$ = this.cartSubject.asObservable();
  constructor() { }

  getCart():any[]{
    console.log("this is cart items ",this.cartItems);
    return this.cartItems};
  
  clearCart():void{
    console.log("Cart before clearing ",this.cartItems);
    this.cartItems=[];
    this.cartSubject.next([...this.cartItems]);
    console.log("Cart after clearing ",this.cartItems);
  };

  addToCart(product:any){
    console.log("cart before: ",this.cartItems);
    const inCart=this.cartItems.find((item)=>item.id===product.id)
    if(inCart){
      inCart.quantity+=1;
      inCart.total=inCart.price*inCart.quantity;
    }
    else{
      this.cartItems.push({...product,quantity:1,total:product.price})
    }
    console.log("cart after: ",this.cartItems);
    console.log("total from cartservices: ",product.total);
    this.cartSubject.next([...this.cartItems]);
  }
  
  removeOneFromCart(product: any) {
    const inCart = this.cartItems.find((item) => item.id === product.id);
    if (inCart) {
      if (inCart.quantity > 1) {
        inCart.quantity -= 1;
        inCart.total = inCart.price * inCart.quantity;
      } else {
        this.deleteFromCart(product.id);
      }
      this.cartSubject.next([...this.cartItems]); // Notify subscribers
    }
  }
  // removeOneFromCart(product: any) {
  //   const inCart = this.cartItems.find((item) => item.id === product.id);
  //   if (inCart) {

  //     if (inCart.quantity) {
  //       inCart.quantity -= 1;
  //       inCart.total=inCart.price*inCart.quantity;
  //     }
  //     else{
  //       this.deleteFromCart(product.id)
  //     }
  //     console.log("cart after: ", this.cartItems);
  //   }
  // }

  deleteFromCart(productId:number){
   this.cartItems=this.cartItems.filter((item)=>productId!==item.id);
   this.cartSubject.next([...this.cartItems]);

  }
  
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.total, 0);
   }
  
}