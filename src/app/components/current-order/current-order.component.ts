import { Component, inject } from '@angular/core';
import { CartService } from '../../services/data/cart.service';

@Component({
  selector: 'app-current-order',
  imports: [],
  templateUrl: './current-order.component.html',
  styleUrl: './current-order.component.css'
})
export class CurrentOrderComponent {

  private cartService =inject(CartService)

  clearCart(){
    this.cartService.clearCart()
    this.cartService.loadCartItems()
  }



}
