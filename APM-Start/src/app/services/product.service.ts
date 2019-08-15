import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../Interfaces/IProduct";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class ProductService
{
    private productUrl: string = 'api/products/products.json';

    constructor(private http: HttpClient)
    {

    }

    getProducts(): Observable<IProduct[]>
    {
       return this.http.get<IProduct[]>(this.productUrl, 
       {
          headers: new HttpHeaders
          ({
            'clientId': '3n/7E6ZaG5+iB2LZ+WAjUQ==',
            'sharedSecret': 'HL5pkAqqO6bU2ab/djfoxWP/w2B9va7a'     
          })
        })
       .pipe
       (
         // The 'TAP' operator allow us to look at the emmited values in the stream without transforming it
          tap(data=> 
          {
            //console.log(JSON.stringify(data))
          }, 
          catchError(this.handleError)
       ));
    }

    handleError(ex: HttpErrorResponse)
    {
        let errorMessage = '';

        if(ex.error instanceof ErrorEvent)
        {
          errorMessage = `An error occurred: ${ex.error.message}`;
        }
        else
        {
          errorMessage = `Server returned code: ${ex.status}, error message: ${ex.message}`
          
        }

        console.log(errorMessage);

        // Throw the error to the caller method
        return throwError(errorMessage);
    }
}