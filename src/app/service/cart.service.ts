import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemsList: any = [];
  public productLists = new BehaviorSubject<any>([]);
  constructor() {}

  getProduct() {
    return this.productLists.asObservable();
  }
  setProduct(product: any) {
    this.cartItemsList.push(...product);
    this.productLists.next(product);
  }
  addToCart(product: any) {
    this.cartItemsList.push(product);
    this.productLists.next(this.cartItemsList);
    this.getTotalPrice();
    console.log(this.cartItemsList)
  }
  getTotalPrice() :number {
    let grandTotal = 0;
    this.cartItemsList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeItem(product: any) {
    this.cartItemsList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemsList.splice(index, 1)
      }
    })
    this.productLists.next(this.cartItemsList)
  }
  removeAll(){
    this.cartItemsList = [];
    this.productLists.next(this.cartItemsList)
  }
}
