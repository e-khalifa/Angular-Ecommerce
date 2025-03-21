import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems'; 
  private cartItems: any[] = this.getCartFromStorage();
  private cartSubject = new BehaviorSubject<any[]>(this.cartItems); 
  cart$ = this.cartSubject.asObservable(); 
  constructor() {}

  getCart(): any[] {
    console.log('Cart items:', this.cartItems);
    return this.cartItems;
  }

  clearCart(): void {
    console.log('Cart before clearing:', this.cartItems);
    this.cartItems = [];
    this.saveCartToStorage(this.cartItems);
    this.cartSubject.next([...this.cartItems]); 
    console.log('Cart after clearing:', this.cartItems);
  }

  
  addToCart(product: any) {
    console.log('Cart before:', this.cartItems);
    const inCart = this.cartItems.find((item) => item.id === product.id);

    if (inCart) {
      inCart.quantity += 1;
      inCart.total = Number((inCart.price * inCart.quantity).toFixed(2));
    } else {
      this.cartItems.push({ ...product, quantity: 1, total: product.price });
    }

    this.saveCartToStorage(this.cartItems); 
    this.cartSubject.next([...this.cartItems]); 
    console.log('Cart after:', this.cartItems);
    console.log('Total from cart service:', this.getTotal());
  }

  removeOneFromCart(product: any) {
    const inCart = this.cartItems.find((item) => item.id === product.id);

    if (inCart) {
      if (inCart.quantity > 1) {
        inCart.quantity -= 1;
        inCart.total = Number((inCart.price * inCart.quantity).toFixed(2));
      } else {
        this.deleteFromCart(product.id); 
        return;
      }

      this.saveCartToStorage(this.cartItems); 
      this.cartSubject.next([...this.cartItems]); 
    }
  }

  
  deleteFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => productId !== item.id);
    this.saveCartToStorage(this.cartItems); 
    this.cartSubject.next([...this.cartItems]); 
  }

  getTotal(): number {
    return Number(
      this.cartItems.reduce((total, item) => total + item.total, 0).toFixed(2)
    );
  }

  private saveCartToStorage(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  private getCartFromStorage(): any[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }
}