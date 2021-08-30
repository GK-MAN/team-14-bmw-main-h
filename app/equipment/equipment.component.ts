import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'equipment.component.html',
    styleUrls: ['./ss_equipment.component.css'] 
})

export class EquipmentComponent implements OnInit, OnDestroy {

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];

    searchText;

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

    newEquipmentClicked = false;

    updateEquipmentClicked = false;

    newReport_QueryClicked = false;

  equipment_type = [
    { name: 'Laptop' },
    { name: 'Phone' },
    { name: 'Tablet' },
    { name: 'Computer' },
  ];

  equipment_brand = [
    { name: 'Apple' },
    { name: 'Samsung' },
    { name: 'Sony' },
  ];

  equipment = [
    { 
      id: '111',
      equipment_trade_in_date: '29 May 2019', 
      equipment_serial_number: '098423',
      equipment_brand: 'Acer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '222',
      equipment_trade_in_date: '12 June 2020', 
      equipment_serial_number: '894023',
      equipment_brand: 'Mercer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '333',
      equipment_trade_in_date: '29 May 2019', 
      equipment_serial_number: '098423',
      equipment_brand: 'Acer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '444',
      equipment_trade_in_date: '12 June 2020', 
      equipment_serial_number: '894023',
      equipment_brand: 'Mercer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '555',
      equipment_trade_in_date: '29 May 2019', 
      equipment_serial_number: '098423',
      equipment_brand: 'Acer',
      equipment_query_status: '', equipment_query_description: ''    },
    { 
      id: '666',
      equipment_trade_in_date: '12 June 2020', 
      equipment_serial_number: '894023',
      equipment_brand: 'Mercer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '777',
      equipment_trade_in_date: '29 May 2019', 
      equipment_serial_number: '098423',
      equipment_brand: 'Acer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
    { 
      id: '888',
      equipment_trade_in_date: '12 June 2020', 
      equipment_serial_number: '894023',
      equipment_brand: 'Mercer',
      equipment_type: 'Laptop',
      equipment_query_status: '', equipment_query_description: ''
    },
  ];

  color;

  model: any = {};
  model2: any = {};

  addEquipment() {
    this.equipment.push(this.model);
    this.model = {};
  }

  myValue;

  deleteEquipment(i) {
    this.equipment.splice(i,1);
    console.log(i);
  }

  editEquipment(editEquipmentInfo) {
    this.updateEquipmentClicked = !this.updateEquipmentClicked;

    this.model2.equipment_brand = this.equipment[editEquipmentInfo].equipment_brand;
    this.model2.equipment_type = this.equipment[editEquipmentInfo].equipment_type;
    this.model2.equipment_serial_number = this.equipment[editEquipmentInfo].equipment_serial_number;
    this.model2.equipment_trade_in_date = this.equipment[editEquipmentInfo].equipment_trade_in_date;
    this.myValue = editEquipmentInfo;
  }

  editReport_Query(editReport_QueryInfo) {
    this.newReport_QueryClicked = !this.newReport_QueryClicked;

    this.model2.status = this.equipment[editReport_QueryInfo].equipment_query_status;
    this.model2.description = this.equipment[editReport_QueryInfo].equipment_query_description;
    this.myValue = editReport_QueryInfo;
  }

  updateEquipment() {

    let editEquipmentInfo = this.myValue;
    for(let i = 0; i < this.equipment.length; i++) {
      if(i == editEquipmentInfo) {
        this.equipment[i] = this.model2;
        this.model2 = {};
      }
    }
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

  addNewEquipmentBtn() {
        this.newEquipmentClicked = !this.newEquipmentClicked;
  }

  show: boolean = false;
  public deploymentName: any;
  showModal(){
    this.show = !this.show;
  }
  fnAddDeploytment(){
    alert(this.deploymentName);
  }
  
}