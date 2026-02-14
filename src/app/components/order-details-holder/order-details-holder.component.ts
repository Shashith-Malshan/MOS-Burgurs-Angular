import { Component, inject, OnInit } from '@angular/core';
import { OrderDetailComponent } from "../order-detail/order-detail.component";
import { CartService } from '../../services/data/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details-holder',
  imports: [OrderDetailComponent],
  templateUrl: './order-details-holder.component.html',
  styleUrl: './order-details-holder.component.css'
})
export class OrderDetailsHolderComponent implements OnInit {
  private cartService=inject(CartService)

  orderList: any[] = []

  ngOnInit(): void {
    
    this.orderList=this.cartService.loadCartItems()



  }

}

