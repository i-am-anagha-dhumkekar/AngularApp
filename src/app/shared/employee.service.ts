import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
import {environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Department } from './department';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //declare variables -- global variable
  formEmployeeData: Employee=new Employee(); //single employee
  //list of Employees
  employees:Employee[]; //all employees
  departments:Department[];
  constructor(private httpClient : HttpClient) { }//contructor injection

  //get all employees
  getAllEmployees()
  {
    this.httpClient.get(environment.apiUrl+'/api/employees').toPromise()
    .then((response)=>{
      console.log(response);
      this.employees=response as Employee[];
    },(error)=>{
      console.log(error);
    });
  }

  //2 Observable TYpes
  getAllEmployeesList():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/employees');
  }

  //3.iNSERT
  insertEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+'/api/employees',employee);
  }

  //Update
  updateEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/employees',employee);
  }

  //Get employee by id
  getEmployeeById(id:number):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/employees');
  }

  //get all Departments
  getDepartments():void
  {
    this.httpClient.get(environment.apiUrl+'/api/departments').toPromise()
    .then((response)=>{
      console.log(response);
      this.departments=response as Department[];
    },(error)=>{
      console.log(error);
    });
  }
}
