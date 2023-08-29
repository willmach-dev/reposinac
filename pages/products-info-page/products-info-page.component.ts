import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-info-page',
  templateUrl: './products-info-page.component.html',
  styleUrls: ['./products-info-page.component.css']
})
export class ProductsInfoPageComponent {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produto adicionado ao carrinho');
  }
}
