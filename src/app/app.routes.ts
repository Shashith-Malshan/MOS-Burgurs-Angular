import { Routes } from '@angular/router';
import { ProductCardHolderComponent } from './components/product-card-holder/product-card-holder.component';

export const routes: Routes = [
    {path:"products/:category",
    component:ProductCardHolderComponent
    }
];
