import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../services/data/cart.service';

@Component({
  selector: 'app-order-detail',
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent {
  @Input() order: any

  cartService = inject(CartService);

  increase(name: string) {
    this.cartService.increaseQuantity(name);
  }

  decrease(name: string) {
    this.cartService.decreaseQuantity(name);
  }

  remove(name: string) {
    this.cartService.removeItem(name);
  }

}
