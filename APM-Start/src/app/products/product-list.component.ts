import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "../Interfaces/IProduct";
import { ProductService } from "../services/product.service";
import { HttpClient } from "selenium-webdriver/http";
import { Observable } from "rxjs";
import { error } from "util";

@Component({selector:'pm-products', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css']})
export class ProductListComponent implements OnInit
{
   _listFilter: string;
    imageWidth: number = 50;
    imageMargin: Number = 2;
    showImage: boolean  = true;
    pageTitle: string = 'Product List';
    errorMessage: string = '';

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
    products: IProduct[];

    // Constructor executes befor the OnInit
    constructor(private productService: ProductService) 
    {
      console.log('Constructor');
    }

    // Lifecicle hook event and execute after the constructor
    ngOnInit(): void
    {
      // Use this event to get data before the component is initialized
      this.getProducts();
      //this.getProductsUsingNext();

      console.log('In OnInit');
    }

    getProductsUsingNext(): void
    {
      this.productService.getProducts().subscribe
      (
        {
          next: data=> 
          {
            this.products = data;
            this.filteredProducts = this.products;
          },
          error: err=> this.errorMessage = err          
      });
    }

    getProducts(): void
    {
        this.productService.getProducts().subscribe(response=>
        {
            this.products = response;
            this.filteredProducts = this.products;
        }, 
        error =>
        {
          console.log("An error occurred in the get products process",  error);
          this.errorMessage = error.message;
        });
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