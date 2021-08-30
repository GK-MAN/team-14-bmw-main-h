import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


import { Employee } from '../_models';
import { EmployeeService, AuthenticationService, AlertService } from '../_services';



@Component({ 
    templateUrl: 'crud_employee.component.html',
    styleUrls: ['./ss_administrator.component.css'] 
})

export class CRUD_EmployeeComponent implements OnInit, OnDestroy {
  
  dataSaved = false;  
  employeeForm: any;  
  employee: Observable<Employee[]>;  
  employeeIdUpdate = null;  
  massage = null;

  constructor(
      private employeeService: EmployeeService,
      private alertService: AlertService
  ) {

  }

  ngOnInit() { 
      this.loadAllEmployee();
  }

  private loadAllEmployee() {
    this.employee = this.employeeService.getAllEmployee();
  }

  //Remove this bad boy
  testData() {
    this.employee.push(
      { Employee_ID: 1, Department_ID: 'Where is x page', first_name: 'In y page', Middle_Name: '', Last_Name: '', Title: '', Gender_ID: '', ID_Number: '',  Contact_Number: '', Job_Title: '', Address_ID: '' },
      { Employee_ID: 2, Department_ID: 'Where is x page', first_name: 'In y page', Middle_Name: '', Last_Name: '', Title: '', Gender_ID: '', ID_Number: '',  Contact_Number: '', Job_Title: '', Address_ID: '' },
      { Employee_ID: 3, Department_ID: 'Where is x page', first_name: 'In y page', Middle_Name: '', Last_Name: '', Title: '', Gender_ID: '', ID_Number: '',  Contact_Number: '', Job_Title: '', Address_ID: '' },
    )
  }

    newEmployeeClicked = false;

  color;

  model: any = {};
  model2: any = {};
  
  deleteEmployee(i) {
    this.employeeService.delete(i)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Deletion was successful', true);

                    this.employee.splice(i, 1);
                    console.log(i);
                },
                error => {
                    this.alertService.error('Error, Deletion was unsuccesful');
                    
                    this.faq.splice(i, 1);//Please Remove this When the you have connected to the API
                    console.log(i);
                });
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.question = this.faq[editEmployeeInfo].question;
    this.model2.answer = this.faq[editEmployeeInfo].answer;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;

    for(let i = 0; i < this.faq.length; i++) {

      if(i == editEmployeeInfo) 
      {
        this.employeeService.update(editEmployeeInfo, this.model2)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Update was successful', true);

                    this.employee[i] = this.model2;
                    this.model2 = {};
                },
                error => {
                    this.alertService.error('Error, Update was unsuccesful');
                    
                    this.employee[i] = this.model2;//Remove this code when you connect to the API
                    this.model2 = {};
                });
      }
    }
    }

    addNewEmployeeBtn() {
        this.newEmployeeClicked = !this.newEmployeeClicked;
      }

}