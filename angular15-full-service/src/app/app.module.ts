import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { ContentComponent } from './Components/Content/content/content.component';
import { UsdtoegpPipe } from './Pipes/usdtoegp.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/Order/order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { PageNotFountComponent } from './Components/page-not-fount/page-not-fount.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductdetailsComponent } from './Components/Order/productdetails/productdetails.component';
import { StreamService } from './Services/stream.service';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UsdtoegpPipe,
    OrderMasterComponent,
    OrderDetailsComponent,
    PageNotFountComponent,
    HomeComponent,

    ProductdetailsComponent,
     ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [StreamService],
  bootstrap: [AppComponent],
})
export class AppModule {}
