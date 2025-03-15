import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any[]=[];
  constructor() { }

  getCart():any[]{
    console.log("this is cart items ",this.cartItems);
    return this.cartItems};
  
  clearCart():void{
    console.log("Cart before clearing ",this.cartItems);
    this.cartItems=[]
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
  }
  removeOneFromCart(product: any) {
    const inCart = this.cartItems.find((item) => item.id === product.id);
    if (inCart) {

      if (inCart.quantity) {
        inCart.quantity -= 1;
        inCart.total=inCart.price*inCart.quantity;
      }
      else{
        this.deleteFromCart(product.id)
      }
      console.log("cart after: ", this.cartItems);
    }
  }
  deleteFromCart(productId:number){
   this.cartItems=this.cartItems.filter((item)=>productId!==item.id);
  }
  
  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].price * this.cartItems[i].quantity;
    }
    return total;
  }
  
}