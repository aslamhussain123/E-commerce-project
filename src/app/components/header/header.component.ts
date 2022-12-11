import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
