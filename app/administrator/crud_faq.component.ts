import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { FAQ } from '../_models';
import { FAQService, AuthenticationService, AlertService } from '../_services';

@Component({ 
    templateUrl: 'crud_faq.component.html',
    styleUrls: ['./ss_administrator.component.css'] 
})

export class CRUD_FAQComponent implements OnInit, OnDestroy {
  
  dataSaved = false;  
  faqForm: any;
  faq: FAQ[] = [];

  faqIdUpdate = null;  
  massage = null;

  constructor(
      private faqService: FAQService,
      private alertService: AlertService
  ) {

  }

  ngOnInit() { 
      this.loadAllFAQ();
  }

  

  private loadAllFAQ() {
    this.faqService.getAllFAQ()
    .pipe(first())
    .subscribe(
      faq => {
        //this.faq = faq;
        this.faq = faq;
      },
      error => {
        this.alertService.error('Error, Data was unsuccesfully retrieved');
      } 
    );
  }

    newFAQClicked = false;

  color;

  model: any = {};
  model2: any = {}; 

  //Remove this bad boy
  testData() {
    this.faq.push(
      { id: 1, question: 'Where is x page', answer: 'In y page'},
      { id: 2, question: 'Where is y page', answer: 'In x page'},
      { id: 3, question: 'What is z', answer: 'It is Z'},
      { id: 4, question: 'When is q', answer: 'It is Q'},
    )
  }

  addFAQ() { 
    if(Object.keys(this.model).length < 2)
    {
      this.alertService.error("Error, you have an empty feild");
      console.log('Empty');
      this.newFAQClicked = !this.newFAQClicked;
      this.model = {};
    }
    else if((Object.keys(this.model).length==2))
    {
      this.faqService.create(this.model)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Creation was successful', true);
                    this.faq.push(this.model);
                    this.newFAQClicked = !this.newFAQClicked;
                    this.model = {};
                },
                error => {
                    this.alertService.error('Error, Creation was unsuccesful');
                    
                    this.faq.push(this.model);//Please Remove this When the you have connected to the API
                    this.newFAQClicked = !this.newFAQClicked;
                    this.model = {};
                });
    }
  }
    
  
  deleteFAQ(i) {
    this.faqService.delete(i)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Deletion was successful', true);

                    this.faq.splice(i, 1);
                    console.log(i);
                },
                error => {
                    this.alertService.error('Error, Deletion was unsuccesful');
                    
                    this.faq.splice(i, 1);//Please Remove this When the you have connected to the API
                    console.log(i);
                });
  }

  myValue;

  editFAQ(editFAQInfo) {
    this.model2.question = this.faq[editFAQInfo].question;
    this.model2.answer = this.faq[editFAQInfo].answer;
    this.myValue = editFAQInfo;
  }

  updateFAQ() {
    let editFAQInfo = this.myValue;

    for(let i = 0; i < this.faq.length; i++) {

      if(i == editFAQInfo) 
      {
        this.faqService.update(editFAQInfo, this.model2)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Update was successful', true);

                    this.faq[i] = this.model2;
                    this.model2 = {};
                },
                error => {
                    this.alertService.error('Error, Update was unsuccesful');
                    
                    this.faq[i] = this.model2;//Remove this code when you connect to the API
                    this.model2 = {};
                });
      }
    }
    }

    addNewFAQBtn() {
        this.newFAQClicked = !this.newFAQClicked;
      }

}