import { Component,inject } from '@angular/core';
import { CartService } from '../../services/data/cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-place-order',
  imports: [NgIf],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
    cartService = inject(CartService);

  orderPlaced: boolean = false;

  placeOrder() {
    //order logic here
    this.cartService.clearCart();

    this.orderPlaced = true;
    setTimeout(() => {
      this.orderPlaced = false;
    }, 2000);
  }

}
