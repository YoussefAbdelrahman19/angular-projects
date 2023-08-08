import { Injectable } from '@angular/core';
import { Department } from '../department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  departments: Department[] = [new Department(1, "PR", 10, 5), new Department(2, "PR", 10, 5), new Department(3, "Hr", 10, 5)]
  constructor() { }

  getDepartments() {
    return this.departments;
  }
  getDepartmentByID(id: number) {
    return this.departments.find((d) => d.id == id)
  }

  deleteDepartmentById(id: number) {
    let index = this.departments.findIndex((s) => s.id == id)!;
    this.departments.splice(index, 1);
  }

  postDepartment(d: Department) {
    this.departments.push(d);
  }

  updateDepartmentById(id: number, updatedDepartment: Department) {
    this.departments[id] = updatedDepartment;
  }
}
