import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/data/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card-holder',
  imports: [ProductCardComponent],
  templateUrl: './product-card-holder.component.html',
  styleUrl: './product-card-holder.component.css'
})
export class ProductCardHolderComponent implements OnInit {
  private productService = inject(ProductsService)
  private route = inject(ActivatedRoute)

  productList: any[] = []

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    
    const category = params['category'] || 'all';
      
   
      this.loadProducts(category);
      console.log(this.productList);
      
    });

  }

  loadProducts(category: string): void {
    if (category === 'all') {
      this.productList = this.productService.getAllProducts();
    } else {
      this.productList =
        this.productService.getProductsByCategory(category);
    }
  }



}
