import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';

import {Course_Onboarder_Enrollment} from './_models';

@Injectable({
  providedIn: 'root'
})
export class Onboarder_Course_EnrollmentService {

   //Joyous, please put the link of the API here
   url = 'https://localhost:44319/api';  

  constructor(private http: HttpClient) { }  

  getAllCourse_Onboarder_Enrollment(): Observable<Course_Onboarder_Enrollment[]> {  
    return this.http.get<Course_Onboarder_Enrollment[]>(`${this.url}`);  
  }  

  getCourse_Onboarder_EnrollmentById(id: string): Observable<Course_Onboarder_Enrollment> {  
      return this.http.get<Course_Onboarder_Enrollment>(`${this.url + '/GetCourse_Onboarder_EnrollmentById/' + id}`);  
    }  

  delete(id: number) {
    return this.http.delete(`${this.url + '/DeleteCourse_Onboarder_Enrollment/' + id}`);
  }

  update(id, course_onboarder_enrollment) {
    return this.http.put(`${this.url + '/UpdateCourse_Onboarder_Enrollment/' + id}`, course_onboarder_enrollment);
  }

  create(course_onboarder_enrollment) {
    return this.http.post(`${this.url + '/CreateCourse_Onboarder_Enrollment/'}`, course_onboarder_enrollment);
  }

} 