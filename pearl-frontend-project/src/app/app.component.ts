import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Message} from './message';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

const URL = "https://3ikr11e11g.execute-api.us-east-1.amazonaws.com/dev/interns/message/get";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pearl-frontend-project';
  messages: Message[] = [];
  displayedColumns = ["seqNo", "description", "duration"];
  constructor(private httpClient: HttpClient) { }


  getMessages(): Observable<Message[]> {
    return this.httpClient
    .get(URL)
    .map(response => {
      const msgs = response.json();
      return msgs.map((msg) => new Message(msg));
    });
  }
  
  ngOnInit() {
    this.getMessages()
      .subscribe((res: HttpResponse<Message[]>) => {
          console.log(res);
          this.messages = res.body;
      });
  }

}


