import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './Components/Content/content/content.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { AppComponent } from './app.component';
import { PageNotFountComponent } from './Components/page-not-fount/page-not-fount.component';
import { ProductdetailsComponent } from './Components/Order/productdetails/productdetails.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  //you have to order routes because its work with first win strategy
  { path: 'Home', component: ContentComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Product', component: OrderMasterComponent },
  { path: 'Product/:pId', component: ProductdetailsComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
