import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './Pages/Layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './Pages/home/home.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { PrimeTestComponent } from './Components/prime-test/prime-test.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, PrimeTestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
