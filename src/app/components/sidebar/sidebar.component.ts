import { Component } from '@angular/core';
import { OrderDetailsHolderComponent } from "../order-details-holder/order-details-holder.component";
import { SubTotalComponent } from "../sub-total/sub-total.component";
import { TotalComponent } from "../total/total.component";
import { CurrentOrderComponent } from "../current-order/current-order.component";
import { PlaceOrderComponent } from "../place-order/place-order.component";

@Component({
  selector: 'app-sidebar',
  imports: [OrderDetailsHolderComponent, SubTotalComponent, TotalComponent, CurrentOrderComponent, PlaceOrderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
