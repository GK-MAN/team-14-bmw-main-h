import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'take_learning_outcome.component.html',
    styleUrls: ['./ss_onboarder.component.css'] 
})

export class Take_Learning_OutcomeComponent implements OnInit, OnDestroy {

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

  learning_outcome = [
    { name: 'LO1', description: 'This lesson outcome you will learn how to take to women'},
    { name: 'LO2', description: 'This lesson outcome you will learn how '},
    { name: 'LO3', description: 'This course'},
    { name: 'LO4', description: 'This lesson outcome you will learn how to take to women'},
    { name: 'LO5', description: 'This lesson outcome you will learn how '},
    { name: 'LO6', description: 'This course'},
  ];

  color;

  

  model: any = {};
  model2: any = {};

  addCourse() {
    this.course.push(this.model);
    this.model = {};
  }

  myValue;

}