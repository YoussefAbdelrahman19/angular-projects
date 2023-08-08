import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StudentDetailsComponent, StudentListComponent]
})
export class StudentModule {
  id: number = 1;
  name: string = "samy";
  age: number = 22;
}
