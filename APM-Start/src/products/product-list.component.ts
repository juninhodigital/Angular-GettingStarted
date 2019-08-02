import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/Interfaces/IProduct";

@Component({selector:'pm-products', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit
{
  _listFilter: string;
    imageWidth: number = 50;
    imageMargin: Number = 2;
    showImage: boolean  = true;

    public get listFilter(): string
    {
      return this._listFilter;
    }

    public set listFilter(value:string)
    {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] =
    [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://96-87-153-66-static.hfc.comcastbusiness.net/cliparts/7/c/5/a/clipart-leaf-rake-256x256-7c5a.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart Rake",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://96-87-153-66-static.hfc.comcastbusiness.net/cliparts/2/a/1/1/clipart-garden-cart-256x256-2a11.png"
          }

    ];

    // Constructor
    constructor() 
    {
      console.log('Constructor');

      this.listFilter = 'cart';
    }

    // Lifecicle hook event
    ngOnInit(): void
    {
      console.log('In OnInit');
    }

    performFilter(filterBy: string): IProduct[]
    {
       filterBy =  filterBy.toLocaleLowerCase();

       return this.products.filter(p=> p.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
    }

    toggleImage(): void
    {
      this.showImage =!this.showImage;
    }
}