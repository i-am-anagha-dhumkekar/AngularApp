import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import {EmployeeService} from 'src/app/shared/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService ,private router:Router) { }

  ngOnInit(): void { //Life Cycle hook
    console.log("Hello");
    this.getAllEmployeesForComponent();
  }
  //1 Get method for all employees
  getAllEmployeesForComponent(){
    //call service here
    this.employeeService.getAllEmployees();
    console.log("get All Employee");
    this.employeeService.getAllEmployeesList().subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  // update Employee
updateEmployee(empId:number,employee:Employee){
   console.log(empId);
   //navigate to edit form with selected employee details
   this.router.navigate(["employeeadd",empId]);
   
    this.populateForm(employee);
  }

//delete employee
deleteEmployee(empId:number){
  console.log(empId);
  if(confirm('Are you confirm')){
    //call service for deletion
    console.log("call service for deletion");
  }
}

// populate Form When click on
populateForm(employee: Employee){
  console.log(employee);
  this.employeeService.formEmployeeData=Object.assign({},employee);
}

}
