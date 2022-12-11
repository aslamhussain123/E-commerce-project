import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any =[];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
   this.cartService.getProduct()
   .subscribe(res=>{
    this.products=res;
    this.grandTotal = this.cartService.getTotalPrice();
   })
  }

  removeProduct(item:any){
    this.cartService.removeItem(item);
  }
}
