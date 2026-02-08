import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BurgerFilterSectionComponent } from '../../components/burger-filter-section/burger-filter-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardHolderComponent } from '../../components/product-card-holder/product-card-holder.component';
import { ProductsService } from '../../services/data/products.service';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent,HeaderComponent,BurgerFilterSectionComponent,FooterComponent,ProductCardHolderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private productService=inject(ProductsService)
  
  productList: any[]=[]
 
  ngOnInit(): void {
    this.productList=this.productService.getProducts();
    console.log(this.productList);
    
  }

}
