import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: UserAuthComponent },
      { path: 'logout', component: UserAuthComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/Add', component: AddProductComponent },
      { path: 'products/:pId', component: ProductDetailsComponent },
      { path: 'orders', component: OrderMasterComponent },
      { path: 'register', component: UserRegisterComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('src/app/Components/user-module/user-module.module').then(
            (m) => m.UserModuleModule
          ),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }, //wildcard path
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent }
]; // Add your routes here

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), // Add RouterModule.forRoot with your routes
  ],
  exports: [RouterModule], // Export RouterModule
})
export class AppRoutingModule {}
