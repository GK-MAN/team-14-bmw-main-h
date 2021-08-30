import { Component, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html', 
    styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit  {
    //public isCollapsed = true;

    public sidebarShow: boolean = false;

    Admin = false;
    buttonName = 'Show';

    user: User;
    userFromApi: User;

    ngOnInit(){
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });

        if(this.userFromApi.role === Role.Admin){
            this.buttonName = 'Show';
        }
        else{
            this.buttonName = 'Hide';
        }
    }

    toggle() {
        this.Admin = !this.Admin
      
        if(this.Admin) {
        this.buttonName = 'Hide'
        console.log(this.Admin)
        }
        else {
        this.buttonName = 'Show'
        }
    }

    user: User;
    
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.user && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}