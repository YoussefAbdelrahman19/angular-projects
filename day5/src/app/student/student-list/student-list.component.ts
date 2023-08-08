import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [new Student(1, "Samy", 25), new Student(2, "mohamed", 25), new Student(3, "hana", 25)];
  selectedStudent: Student = new Student(0, "", 0);
  newStudent: Student = new Student(0, "", 0);
  saveAction = true;
  updatedStudentId: number = 0;

  addStudent() {
    if (this.saveAction) {
      this.students.push(new Student(this.newStudent.id, this.newStudent.name, this.newStudent.age))
    } else {
      let i = this.students.findIndex((s) => s.id == this.updatedStudentId)!
      this.students[i] = this.newStudent;
      this.newStudent = new Student(0, "", 0);
      this.saveAction = true
    }
  }

  showDetails(id: number) {
    this.selectedStudent = this.students.find((s) => s.id == id)!;
  }

  deleteStudent(id: number) {
    if (!confirm("you sure want to delete this Student")) return;
    let index = this.students.findIndex((s) => s.id == id)!;
    this.students.splice(index, 1);
  }

  updateStudent(id: number) {
    this.newStudent = { ...this.students.find((s) => s.id == id)! };
    this.saveAction = false;
    this.updatedStudentId = id;
  }

}
