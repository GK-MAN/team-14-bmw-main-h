import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService, AlertService } from '../_services';

@Component({ 
    templateUrl: 'user_role.component.html',
    styleUrls: ['./user_role.component.css'] 
})

export class User_RoleComponent implements OnInit, OnDestroy {

    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
interval: any;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        
    }

    newUser_RoleClicked = false;

  user_role = [
    { name: 'Human Resource Administrator', description: 'Access: '},
    { name: 'Office Administrator', description: 'Access: '},
    { name: 'Onboarder', description: 'Access: '},
    { name: 'Manager', description: 'Access: '},
  ];

  color;
  

  model: any = {};
  model2: any = {}; 

  addUser_Role() {
    this.user_role.push(this.model);
    this.model = {};

    this.interval = setTimeout(() => {
      this.alertService.success('User Role successfully created', true)
    }, 100);
  }

  deleteUser_Role(i) {
    this.user_role.splice(i, 1);
    console.log(i);
  }

  myValue;

  editUser_Role(editUser_RoleInfo) {
    this.model2.name = this.user_role[editUser_RoleInfo].name;
    this.model2.description = this.user_role[editUser_RoleInfo].description;
    this.myValue = editUser_RoleInfo;
  }

  updateUser_Role() {
    let editUser_RoleInfo = this.myValue;
    for(let i = 0; i < this.user_role.length; i++) {
      if(i == editUser_RoleInfo) {
        this.user_role[i] = this.model2;
        this.model2 = {};
      }
    }
    }

    addNewUser_RoleBtn() {
        this.newUser_RoleClicked = !this.newUser_RoleClicked;
      }

}