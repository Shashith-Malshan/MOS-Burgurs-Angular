import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/data/products.service';

@Component({
  selector: 'app-product-card-holder',
  imports: [ProductCardComponent],
  templateUrl: './product-card-holder.component.html',
  styleUrl: './product-card-holder.component.css'
})
export class ProductCardHolderComponent implements OnInit {
 private productService=inject(ProductsService)
  
  productList: any[]=[]
 
  ngOnInit(): void {
    this.productList=this.productService.getAllProducts();
    console.log(this.productList);
    
  }

}
