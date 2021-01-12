import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  //Don't need this because we're not going to nest the
  //component within another component but we will be using
  //routing so we don't need this
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
