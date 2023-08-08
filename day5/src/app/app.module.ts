import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your own components and modules here
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'departments',
    component: DepartmentListComponent,
    children: [{ path: 'details/:id', component: DepartmentDetailsComponent }],
  },
  { path: 'departments/add', component: AddDepartmentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: NotFoundError },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    // Add other imported modules here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
