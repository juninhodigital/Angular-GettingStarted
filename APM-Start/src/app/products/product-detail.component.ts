import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({templateUrl: './product-detail.component.html',styleUrls: ['./product-detail.component.css']})
export class ProductDetailComponent implements OnInit
{
  pageTitle:string = 'Product Detail';
  product: IProduct;

  // Constructor
  constructor(private route: ActivatedRoute, private router: Router) 
  { 

  }

  ngOnInit()
  {
    let id = +this.route.snapshot.paramMap.get('id');

    console.log(id);

    this.pageTitle += ` ${id}`;

    this.product =  
    {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://96-87-153-66-static.hfc.comcastbusiness.net/cliparts/7/c/5/a/clipart-leaf-rake-256x256-7c5a.png"
    };
  }

  onBack(): void
  {
    this.router.navigate(['/products']);
  }

}
