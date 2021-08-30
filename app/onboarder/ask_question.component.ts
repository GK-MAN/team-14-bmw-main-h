import { DatePipe } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-room',
  templateUrl: './ask_question.component.html',
  styleUrls: ['./robot.component.css']
})
export class Ask_QuestionComponent implements OnInit, AfterViewChecked {
  id$: Observable<string>;
  chat: Chat;
  currentUser = '001';
  form: FormGroup;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    const dateSendingToServer = new DatePipe('en-US').transform(
      new Date(),
      'yyyy-MM-dd'
    );
    console.log(dateSendingToServer);
    this.form = this.fb.group({
      input: [dateSendingToServer]
    });
  }

  ngOnInit() {
    this.id$ = this.route.params.pipe(map(p => p.id));
    this.chat = CHAT;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onSubmit() {
    const message = {
      ...new Message(),
      ...{
        sendUser: this.currentUser,
        text: this.form.value.input,
        ts: Math.floor(Date.now() / 1000)
      }
    };

    this.chat.data.push(message);
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}

const CHAT = {
  id: '0',
  data: [
    {
      sendUser: '001',
      text: 'Hello',
      ts: 1622437560
    },
    {
      sendUser: '001',
      text: 'Morning!',
      ts: 1622437560
    },
    {
      sendUser: '002',
      text: 'Hi Onboarder, this is the ask question page. Where you can ask just about anything to us (Human Resource Managers, and we will get back to you in a jiffy. All questions will come to us via email and we will attend to your question back with an email or a meeting if you would like.',
      ts: 1622440800
    }
  ]
};

class Chat {
  id: string;
  data: Message[];
}

class Message {
  sendUser: string;
  text: string;
  ts: number;
}
