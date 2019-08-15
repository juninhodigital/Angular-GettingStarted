import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './Pipes/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: 
  [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
    // ProductService
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot
    ([
      { path: 'products', component: ProductListComponent},
      { 
        path: 'products/:id', 
        component: ProductDetailComponent, 
        canActivate: [ProductDetailGuard]
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo:'welcome', pathMatch: 'full'},
      { path: '**', redirectTo:'welcome', pathMatch: 'full'},
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
