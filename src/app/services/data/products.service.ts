import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: any[] = [
  {
    category: 'beef',
    item: [
      {
        name: 'Beef Deluxe',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Double Cheeseburger',
        price: 15.50,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Smokey Bacon BBQ',
        price: 14.25,
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Steakhouse',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'chicken',
    item: [
      {
        name: 'Classic Crispy Chicken',
        price: 11.50,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Spicy Zinger',
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Chicken Club Sandwich',
        price: 14.00,
        image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'vegan',
    item: [
      {
        name: 'Beyond Deluxe',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Mushroom Swiss (Plant-Based)',
        price: 13.50,
        image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Quinoa & Avocado Burger',
        price: 12.95,
        image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80'
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



  getAllProducts(): any[] {
    return this.products.flatMap(p => p.item);
  }

  getProductsByCategory(category: string): any[] {
    if (category === 'all') {
      return this.getAllProducts();
    }

    return this.products.find(
      p => p.category.toLowerCase() === category.toLowerCase()
    )?.item || [];
  }

}
