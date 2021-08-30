import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User, FAQ } from '../_models';
import { FAQService, AlertService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'faq.component.html',
    styleUrls: ['./ss_onboarder.component.css']
})
export class FAQComponent implements OnInit, OnDestroy {
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

}