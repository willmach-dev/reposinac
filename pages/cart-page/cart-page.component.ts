import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  products = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) {}

  numberFormat(value: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  removeFromCart(product_id: number) {
    this.cartService.removeProduct(product_id);
  }
}
