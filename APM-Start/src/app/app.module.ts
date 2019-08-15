import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './Pipes/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './services/product.service';

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
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
