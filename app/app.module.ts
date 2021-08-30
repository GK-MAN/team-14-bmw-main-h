import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app.routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';

import { 
    Assign_User_RoleComponent,
    User_RoleComponent,
    SS_UsersComponent
 } from './users';

 import {
    Register_EmployeeComponent,
    Assign_EquipmentComponent,
    OnboarderComponent,
    SS_AdministratorComponent,
    CRUD_FAQComponent,
    CRUD_EmployeeComponent,
    Import_EmployeeComponent,
 } from './administrator';

 import {
    Take_CourseComponent,
    Take_Learning_OutcomeComponent,
    Take_QuizComponent,
    Take_ContentComponent,
    ProgressComponent,
    FAQComponent,
    Ask_QuestionComponent,
    SS_OnboarderComponent
 } from './onboarder';

import {
     CourseComponent, 
     Assign_CourseComponent,
     Learning_OutcomeComponent,
     Set_QuizComponent,
     Learning_ContentComponent,
     SS_CourseComponent,
     CRUD_AchievementComponent,
  } from './course';

import { 
    HomeComponent,
} from './home';

import {
    SS_EquipmentComponent,
    EquipmentComponent, 
    My_EquipmentComponent
} from './equipment';

import {
    SS_ReportComponent,
    ReportComponent
} from './report';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';

//Feature
import { FormsModule } from '@angular/forms';
import { NgbdDropdownBasicModule } from './app/dropdown-basic.module';//Drop fdownlist
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { from } from 'rxjs';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//This will assist the code to convert whatever into PDF, ITS A FEATURE
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';


//Import users page
//import { User_RoleComponent } from './user_role';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule, 
        FormsModule,
        NgbCollapseModule,
        Ng2SearchPipeModule,
        IntlModule,
        GridModule,
        PDFExportModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,

        //Users
        SS_UsersComponent,
        User_RoleComponent,
        Assign_User_RoleComponent,

        //Onboarder
        SS_OnboarderComponent,
        Take_CourseComponent,
        Take_Learning_OutcomeComponent,
        Take_QuizComponent,
        Take_ContentComponent,
        FAQComponent,
        ProgressComponent,
        Ask_QuestionComponent,
        
        //Course 
        CourseComponent,
        SS_CourseComponent,
        CourseComponent,
        Assign_CourseComponent,
        Set_QuizComponent,
        Learning_OutcomeComponent,
        Learning_ContentComponent,
        CRUD_AchievementComponent,

        //Administrator
        SS_AdministratorComponent,
        Register_EmployeeComponent,
        OnboarderComponent,
        Assign_EquipmentComponent,
        CRUD_FAQComponent,
        Import_EmployeeComponent,

        //Equipment
        SS_EquipmentComponent,
        EquipmentComponent,
        My_EquipmentComponent,

        //SS_ReportComponent
        SS_ReportComponent,
        ReportComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };