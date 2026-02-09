import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: any[] = [
    {
      category: 'Beef',
      item: [
        {
          name: 'Beef Deluxe',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Double Cheese',
          price: 8.98,
          image: 'https://unsplash.com/photos/burger-with-lettuce-and-tomato-Fn6dPYtPUMc'
        },
        {
          name: 'Bacon Smokey',
          price: 5.03,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Garden Fresh',
          price: 7.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      category: 'Chicken',
      item: [
        {
          name: 'Chicken Deluxe',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Double Cheese',
          price: 8.98,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Bacon Smokey',
          price: 5.03,
          image: 'https://unsplash.com/photos/a-delicious-cheeseburger-with-lettuce-and-tomato-SezzVhcMwDk'
        },
        {
          name: 'Garden Fresh',
          price: 7.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      category: 'Vegan',
      item: [
        {
          name: 'Vegan Deluxe',
          price: 5.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Double Cheese',
          price: 8.98,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Bacon Smokey',
          price: 5.03,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Garden Fresh',
          price: 7.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  ];

  orders: any[] = [
    {
      name: 'Bacon Smokey',
      price: 5.03,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Classic Deluxe',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
    }
  ];

  getProducts() {
    return this.products;
  }

  getAllProducts(){
    return this.products;
  }
}
