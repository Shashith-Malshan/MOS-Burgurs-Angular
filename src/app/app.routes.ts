import { Routes } from '@angular/router';
import { ProductCardHolderComponent } from './components/product-card-holder/product-card-holder.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'products/all', pathMatch: 'full' },
      { path: 'products/:category', component: ProductCardHolderComponent }
    ]
  }
];
