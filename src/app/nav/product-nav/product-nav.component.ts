import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss']
})
export class ProductNavComponent implements OnInit {

  public productNavItems: Array<IProductNavItem> = [
    {
      title: 'blog',
      url: '#/blog'
    },
    {
      title: 'nourish',
      url: '#/nourish'
    },
    {
      title: 'shop',
      url: '#/shop'
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}

export interface IProductNavItem {
  title: string,
  url: string
}
