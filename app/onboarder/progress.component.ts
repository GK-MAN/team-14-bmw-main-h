import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'progress.component.html',
    styleUrls: ['./ss_onboarder.component.css'] 
})

export class ProgressComponent implements OnInit, OnDestroy {

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

  course = [
    { name: 'COVID-19 Protocals', progress: '48%', duration: '2 week'},
    { name: 'Sexual Harrassment', progress: '70%', duration: '1 week'},
  ];

}