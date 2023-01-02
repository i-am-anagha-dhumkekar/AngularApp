import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../../shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    //Life Cycle hook
    console.log("Hello there...");
    this.getAllEmployeesForComponent();
  }
  //get method for all employees
  getAllEmployeesForComponent()
  {
    //call service here
    this.employeeService.getAllEmployees();
    console.log("Hello");
  }
}
