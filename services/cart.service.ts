import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeProduct(product_id: number) {
    this.items = this.items.filter((item) => {
      return item.id != product_id;
    });
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
