import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'learning_outcome.component.html',
    styleUrls: ['./ss_course.component.css'] 
})

export class Learning_OutcomeComponent implements OnInit, OnDestroy {

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

    newLearning_OutcomeClicked = false;

    updateLearning_OutcomeClicked = false;

    learning_outcome = [
      { id: '123', name: 'LO1', description: 'This lesson outcome you will learn how to take to women'},
      { id: '123', name: 'LO2', description: 'This lesson outcome you will learn how to take to women'},
      { id: '123', name: 'LO3', description: 'This lesson outcome you will learn how to take to women'},
      { id: '123', name: 'LO4', description: 'This lesson outcome you will learn how to take to women'},
      { id: '123', name: 'LO5', description: 'This lesson outcome you will learn how to take to women'},
    ];

  color;

  

  model: any = {};
  model2: any = {}; 

  addLearning_Outcome() {
    this.learning_outcome.push(this.model);
    this.model = {};
  }

  deleteLearning_Outcome(i) {
    this.learning_outcome.splice(i, 1);
    console.log(i);
  }

  myValue;

  editLearning_Outcome(editLearning_OutcomeInfo) {
    this.updateLearning_OutcomeClicked = !this.updateLearning_OutcomeClicked;

    this.model2.name = this.learning_outcome[editLearning_OutcomeInfo].name;
    this.model2.description = this.learning_outcome[editLearning_OutcomeInfo].description;
    this.myValue = editLearning_OutcomeInfo;
  }

  updateLearning_Outcome() {
    let editLearning_OutcomeInfo = this.myValue;
    for(let i = 0; i < this.learning_outcome.length; i++) {
      if(i == editLearning_OutcomeInfo) {
        this.learning_outcome[i] = this.model2;
        this.model2 = {};
      }
    }
    }

    closeUpdate(){
      this.updateLearning_OutcomeClicked = !this.updateLearning_OutcomeClicked;
    }

    addNewLearning_OutcomeBtn() {
        this.newLearning_OutcomeClicked = !this.newLearning_OutcomeClicked;
      }

}