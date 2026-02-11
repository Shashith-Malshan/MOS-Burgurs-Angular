import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart-item';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];



  constructor() { }

  addToCart(name: string, price: number): void {
    const existingItem = this.cartItems.find(
      cartItem => cartItem.name === name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({
        name,
        price,
        quantity: 1
      });
    }
    console.log(name);


  }

  loadCartItems() {
    return this.cartItems;
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }


  clearCart(): void {
    this.cartItems.length = 0;
  }

  getsubTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotal(): number {
    const subtotal = this.getsubTotal();
    return Number((subtotal * 1.10).toFixed(2));
  }

  increaseQuantity(name: string): void {
    const item = this.cartItems.find(i => i.name === name);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(name: string): void {
    const item = this.cartItems.find(i => i.name === name);

    if (item) {
      item.quantity--;

      if (item.quantity <= 0) {
        this.removeItem(name);
      }
    }
  }

  removeItem(name: string): void {
    const index = this.cartItems.findIndex(
      item => item.name === name
    );

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }


}
