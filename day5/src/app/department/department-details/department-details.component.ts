import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  dept: Department | undefined = new Department(0, "", 0, 0);
  constructor(public deptServ: DepartmentServiceService, public ar: ActivatedRoute) { }
  ngOnInit() {
    this.ar.params.subscribe(data => {
      console.log(data); this.dept = this.deptServ.getDepartmentByID(data["id"])
    })
  }
}
