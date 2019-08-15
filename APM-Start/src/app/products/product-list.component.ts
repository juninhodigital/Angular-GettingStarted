import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../Interfaces/IProduct";
import { ProductService } from "../services/product.service";

@Component({selector:'pm-products', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit
{
   _listFilter: string;
    imageWidth: number = 50;
    imageMargin: Number = 2;
    showImage: boolean  = true;
    pageTitle: string = 'Product List';

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
    products: IProduct[] = null;

    // Constructor executes befor the OnInit
    constructor(private productService: ProductService) 
    {
      console.log('Constructor');
    }

    // Lifecicle hook event
    ngOnInit(): void
    {
      // Use this event to get data before the component is initialized
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;

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

    onRatingClicked(message: string): void
    {
      this.pageTitle = 'Product List: ' +  message;
    }
}