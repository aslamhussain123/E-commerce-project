import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  topCartProduct: any = [
    {
      title: 'Fashion',
      details: 'This is fasion card',
      img: 'assets/images/j1.jpeg',
    },
    {
      title: 'Jewellry',
      details: 'This is jewley card',
      img: 'assets/images/j1.jpeg',
    },
    {
      title: 'Ellectronics',
      details: 'This is electronic card',
      img: 'assets/images/j1.jpeg',
    },
  ];
  displayProducts: any;
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res) => {
      this.displayProducts = res;
      this.displayProducts.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addToCartProduct(item: any) {
    this.cartService.addToCart(item);
  }
}
