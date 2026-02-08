import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BurgerFilterSectionComponent } from '../../components/burger-filter-section/burger-filter-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardHolderComponent } from '../../components/product-card-holder/product-card-holder.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent,HeaderComponent,BurgerFilterSectionComponent,FooterComponent,ProductCardHolderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
