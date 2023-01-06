import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  //declare variable
  _empId:number;
  constructor(public employeeService: EmployeeService,
    private toastr: ToastrService,
    private route:ActivatedRoute,
    private router:Router) { } //Inject

  ngOnInit(): void { //Life Cycle hook
    this.employeeService.getDepartments();
    //getting data from url
    this._empId=this.route.snapshot.params['empId'];
  }
  //Submit Method
  onSubmit(form: NgForm)
  {
    console.log(form.value);
    let _addEmpId=this.employeeService.formEmployeeData.empId;
    //check condition here
    if(_addEmpId==0 || _addEmpId==null)
    {
      this.addEmployee(form);
      //window.location.reload();
      this.redirect();
    }
    else{
      this.editEmployee(form);
      //window.location.reload();
      this.redirect();
    }
    
  }
  //INSERT
  addEmployee(form?:NgForm)
  {
    console.log("Inserting....");
    this.employeeService.insertEmployee(form.value).subscribe(
      (result)=>{ console.log(result);
        this.toastr.success('Employee record has been inserted!', 'Sucess');},
      (error)=>{
        console.log(error);
        this.toastr.error("Something wrong... please try again","Failed")
      }
    );
  }

  editEmployee(form?:NgForm)
  {
    console.log("Inserting....");
    this.employeeService.updateEmployee(form.value).subscribe(
      (result)=>{ 
        console.log(result);
        this.toastr.success('Employee Record edited successfully', 'Sucess');
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Edit failed!!! Try again..","Failed");
      }
    );
  }

  redirect(){

    this.router.navigate(['employeeList']);

  }

}
