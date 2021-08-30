import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'take_course.component.html',
    styleUrls: ['./ss_onboarder.component.css'] 
})

export class Take_CourseComponent implements OnInit, OnDestroy {

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

  course = [
    { name: 'Sexual Harrasment Course', description: 'This course will help assit Onboarder to know all the rules and expectation BMW has in regards to sexual Harrasment.', id: '4762', duration: '2 Weeks'},
    { name: 'Code of Conduct Course', description: 'This course will assist the Onboarder to know the code of conducted expected by BMW.', id: '2039', duration: '3 Weeks'},
    { name: 'Training Course', description: 'This course', id: '6970', duration: '1 Weeks'},
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