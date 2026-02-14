import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/data/cart.service';

@Component({
  selector: 'app-sub-total',
  imports: [CommonModule],
  templateUrl: './sub-total.component.html',
  styleUrl: './sub-total.component.css'
})
export class SubTotalComponent  {
  cartService =inject(CartService)
  
  
  get cartSubTotal(): number {
  return this.cartService.getsubTotal();
}


  
  
  

}
