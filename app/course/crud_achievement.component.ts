import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'crud_achievement.component.html',
    styleUrls: ['./ss_course.component.css'] 
})

export class CRUD_AchievementComponent implements OnInit, OnDestroy {

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

    newAchievement_TypeClicked = false;

    updateAchievement_TypeClicked = false;

  achievement_type = [
    { id: '1', name: 'Bronze', mark: '50%' },
    { id: '2', name: 'Silver', mark: '75%' },
    { id: '3', name: 'Gold', mark: '95%' },
  ];

  //color;

  

  model: any = {};
  model2: any = {}; 

  addAchievement_Type() {
    this.achievement_type.push(this.model);
    this.model = {};

    this.newAchievement_TypeClicked = !this.newAchievement_TypeClicked;
  }

  deleteAchievement_Type(i) {
    this.achievement_type.splice(i, 1);
    console.log(i);
  }

  myValue;

  editAchievement_Type(editAchievement_TypeInfo) {
    this.updateAchievement_TypeClicked = !this.updateAchievement_TypeClicked;

    this.model2.id = this.achievement_type[editAchievement_TypeInfo].id;
    this.model2.name = this.achievement_type[editAchievement_TypeInfo].name;
    this.model2.mark = this.achievement_type[editAchievement_TypeInfo].mark;
    this.myValue = editAchievement_TypeInfo;
  }

  updateAchievement_Type() {
    let editAchievement_TypeInfo = this.myValue;
    for(let i = 0; i < this.achievement_type.length; i++) {
      if(i == editAchievement_TypeInfo) {
        this.achievement_type[i] = this.model2;
        this.model2 = {};
      }
    }

    this.updateAchievement_TypeClicked = !this.updateAchievement_TypeClicked;

 }

    addNewAchievement_TypeBtn() {
        this.newAchievement_TypeClicked = !this.newAchievement_TypeClicked;
    }

}