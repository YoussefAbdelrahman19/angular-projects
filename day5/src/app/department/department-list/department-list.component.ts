import { Component, OnChanges } from '@angular/core';
import { Department } from '../department';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnChanges {
  departments: Department[] = [];
  selectedDepartment: Department = new Department(0, '', 0, 0);
  newDepartment: Department = new Department(0, '', 0, 0);
  saveAction = true;
  updatedDepartmentId: number = 0;

  constructor(public dept: DepartmentServiceService, private r: Router) {}
  showAdd() {
    this.r.navigateByUrl('/departments/add');
  }
  addDepartment() {
    if (this.saveAction) {
      this.dept.postDepartment(
        new Department(
          this.newDepartment.id,
          this.newDepartment.name,
          this.newDepartment.numberOfEmployes,
          this.newDepartment.rate
        )
      );
    } else {
      let index = this.departments.findIndex(
        (d) => d.id == this.updatedDepartmentId
      )!;

      this.dept.updateDepartmentById(index, this.newDepartment);
      this.newDepartment = new Department(0, '', 0, 0);
      this.saveAction = true;
    }
  }

  showDetails(id: number) {
    this.selectedDepartment = this.departments.find((s) => s.id == id)!;
  }

  deleteDepartment(id: number) {
    if (!confirm('you sure want to delete this Department')) return;
    this.dept.deleteDepartmentById(id);
  }

  updateDepartment(id: number) {
    this.newDepartment = { ...this.departments.find((s) => s.id == id)! };
    this.saveAction = false;
    this.updatedDepartmentId = id;
  }

  ngOnInit() {
    this.departments = this.dept.getDepartments();
  }

  ngOnChanges() {
    this.departments = this.dept.getDepartments();
  }
}
