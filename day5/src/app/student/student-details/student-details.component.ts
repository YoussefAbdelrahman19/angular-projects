import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input() stdStudent = new Student(0, "", 0);


  /**
    // id: number = 1;
    // name: string = "samy";
    // age: number = 10;

    // changeName(name: string): void {
    //   this.name = name;
    // }

    // changeAge(age: any): void {
    //   this.age = age;
    // }
   */

}
