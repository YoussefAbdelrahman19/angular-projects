import { Injectable } from '@angular/core';
import { EndPoints } from './endpoints';
import { HttpClient } from "@angular/common/http";
import { Employee} from "../../models";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = EndPoints.BASE_URL
  private allEmployeeApiUrl = EndPoints.ALL_EMPLOYEE_ENDPOINT;
  private newEmployeeApiUrl = EndPoints.NEW_EMPLOYEE_ENDPOINT;
  private deleteEmployeeApiUrl = EndPoints.DELETE_ENDPOINT_ENDPOINT;
  private editEmployeeApiUrl = EndPoints.EDIT_EMPLOYEE_ENDPOINT;
  private getEmpByIDUrl= EndPoints.getEmpByID_ENDPOINT

  // formData: Employee = new Employee();
  list: Employee[];
  constructor(private http: HttpClient, private router: Router) { }
 
  allEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.allEmployeeApiUrl);
  }
 
  getEmployeeById(id: number): Observable<Employee> {  
    return this.http.get<Employee>(`${this.getEmpByIDUrl}/${id}`);  
  }  
  addEmployee(data: any): Observable<any> {
    return this.http.post(this.newEmployeeApiUrl, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.get(`${this.deleteEmployeeApiUrl}/${id}`);
  }

  editEmployee(data:any): Observable<Employee> {
    return this.http.post(`${this.editEmployeeApiUrl}`, data );
  }


 

}
