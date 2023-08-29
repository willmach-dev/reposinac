import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  @Input() title: string = '';
  @Input() category_id: number = 0;
  @Input() limit: number = 4;
  @Input() offset: number = 0;
  products: any = [];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    if ( this.category_id != 0 ) {
      this.getProductList();
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert("Produto adicionado ao carrinho.");
  }

  getProductList() {
    let that = this;

    fetch(`https://api.escuelajs.co/api/v1/products/`
      +`?categoryId=${this.category_id}`
      +`&offset=${this.offset}`
      +`&limit=${this.limit}`
    ).then(function(response) {
      return response.json();
    }).then(function(data) {
      that.products = data;
    }).catch(function(err) {
      console.log(err);
      alert('Deu erroo!!!');
    });
  }
}
