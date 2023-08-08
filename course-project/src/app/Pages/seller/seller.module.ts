import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { SellerAuthComponent } from 'src/app/Components/seller/seller-auth/seller-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerHomeComponent } from 'src/app/Components/seller/seller-home/seller-home.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from 'src/app/Guards/auth.guard';
import { SellerAddProductComponent } from 'src/app/Components/seller/seller-add-product/seller-add-product.component';
import { EditProductComponent } from 'src/app/Components/seller/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/seller/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: SellerHomeComponent,
    // canActivate: [AuthGuard],
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: SellerAuthComponent,
  },
  {
    path: 'add-product',
    component: SellerAddProductComponent,
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SellerComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    EditProductComponent,
  ],
  // providers: [authGuard],
})
export class SellerModule {}
