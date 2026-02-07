import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { BurgerFilterSectionComponent } from "./components/burger-filter-section/burger-filter-section.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductCardHolderComponent } from "./components/product-card-holder/product-card-holder.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, BurgerFilterSectionComponent, FooterComponent, SidebarComponent, HeaderComponent, ProductCardHolderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MOS_Burgurs';
}
