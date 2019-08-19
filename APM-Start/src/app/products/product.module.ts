import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../Pipes/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule
({
  declarations: 
  [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe    
  ],
  imports: 
  [
    RouterModule.forChild
    (
      [
        { path: 'products', component: ProductListComponent},
        { 
          path: 'products/:id', 
          canActivate: [ProductDetailGuard],
          component: ProductDetailComponent 
        }
      ]
    ),
    SharedModule
  ]
})
export class ProductModule
{

}