import { Department } from "./department";

export class Employee {
    empId: number=0;
    empName: string="Sanjay";
    designation: string="Manager";
    dateOfJoining:Date=new Date;
    salary:number=0;
    empPhoneNumber:string='';
    deptId: number=0;
    //Object Oriented
    department :Department =new Department();
}
