import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'my_equipment.component.html',
    styleUrls: ['./ss_equipment.component.css'] 
})

export class My_EquipmentComponent implements OnInit, OnDestroy {

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        
    }

    newUser_RoleClicked = false;

    newReport_QueryClicked = false;

  equipment = [
    { serial_number: '249837', equipment_type: 'Laptop', equipment_brand: 'Dell', equipment_check_out_date: '18 March 2021', equipment_query_status: '', equipment_query_description: '' },
    { serial_number: '87983', equipment_type: 'Phone', equipment_brand: 'Samsun', equipment_check_out_date: '8 March 2021', equipment_query_status: '', equipment_query_description: '' },
    { serial_number: '345378', equipment_type: 'Tablet', equipment_brand: 'Lenovo', equipment_check_out_date: '20 March 2021', equipment_query_status: '', equipment_query_description: '' },
  ];

  color;

  

  model: any = {};
  model2: any = {}; 

  myValue;

  editReport_Query(editReport_QueryInfo) {
    this.newReport_QueryClicked = !this.newReport_QueryClicked;

    this.model2.status = this.equipment[editReport_QueryInfo].equipment_query_status;
    this.model2.description = this.equipment[editReport_QueryInfo].equipment_query_description;
    this.myValue = editReport_QueryInfo;
  }

  updateReport_Query() {
    let editReport_QueryInfo = this.myValue;
    for(let i = 0; i < this.equipment.length; i++) {
      if(i == editReport_QueryInfo) {
        this.equipment[i].equipment_query_status = this.model2.status;
        this.equipment[i].equipment_query_description = this.model2.description;
        this.model2 = {};
      }
    }

    this.newReport_QueryClicked = !this.newReport_QueryClicked;
  }

  CloseReport_QueryBtn() {
    this.newReport_QueryClicked = !this.newReport_QueryClicked;
  }

}