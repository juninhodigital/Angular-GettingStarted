import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/products/product-list.component';
import { ConvertToSpacePipe } from 'src/Pipes/convert-to-space.pipe';

@NgModule({
  declarations: 
  [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe
  ],
  imports: 
  [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
