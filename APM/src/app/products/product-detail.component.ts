import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');//+ converts the parameter string 'id' to numeric
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2020',
      'description': 'Leaf rake with 48 inch wooden handle.',
      'price': 19.95,
      'starRating': 3.3,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }
  
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
