import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Layout.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
