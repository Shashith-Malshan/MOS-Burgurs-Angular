import { Component } from '@angular/core';
import { OrderDetailComponent } from "../order-detail/order-detail.component";

@Component({
  selector: 'app-order-details-holder',
  imports: [OrderDetailComponent],
  templateUrl: './order-details-holder.component.html',
  styleUrl: './order-details-holder.component.css'
})
export class OrderDetailsHolderComponent {

}
