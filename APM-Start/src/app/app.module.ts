import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacePipe } from 'src/app/Pipes/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: 
  [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent
    // ProductService
  ],
  imports: 
  [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
