import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../services/data/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product:any
  private cartService=inject(CartService)


  addToCart(name: string, price: number) {
  this.cartService.addToCart(name,price);
}
  



}
