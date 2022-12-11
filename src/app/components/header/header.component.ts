import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   mainmenuItems=[
    {
      name:'Home',
      link:'/'
    },
    {
      name:'Products',
      link:'/products'
    },
    {
      name:'Pricing',
      link:'/cart'
    },
  ]
  public cartItemCount : any = 0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.cartItemCount =res.length;
    })
  }

}
