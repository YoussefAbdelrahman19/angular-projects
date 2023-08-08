import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class CoreModule { }
