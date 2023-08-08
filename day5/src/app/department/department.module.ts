import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, SharedModule, RouterModule
  ],
  exports: [
    DepartmentListComponent
  ]

})
export class DepartmentModule { }
