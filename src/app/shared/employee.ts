import { Department } from "./department";

export class Employee {
    empId: number=0;
    empName: string;
    designation: string;
    dateOfJoining:Date;
    salary:number;
    empPhoneNumber:string;
    deptId: number;
    isActive:boolean;
    //Object Oriented
    department :Department =new Department();
}
