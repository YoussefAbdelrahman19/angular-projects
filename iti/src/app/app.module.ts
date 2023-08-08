import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { ConvertCurrencyPipe } from './Pipes/convert-currency.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
 import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    ConvertCurrencyPipe,
    OrderMasterComponent,
    NotFoundComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserAuthComponent,
    UserRegisterComponent,
    // StoreDataComponents
  ],
  imports: [BrowserModule,FormsModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
