import { Component, inject } from '@angular/core';
import { CartService } from '../../services/data/cart.service';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  cartService=inject(CartService)
  
  get cartTotal(): number{
    return this.cartService.getTotal()
  }

}
