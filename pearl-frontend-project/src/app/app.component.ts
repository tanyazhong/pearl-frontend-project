import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

const URL = "https://3ikr11e11g.execute-api.us-east-1.amazonaws.com/dev/interns/message/get";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pearl-frontend-project';
  messages;
  dataSource: MatTableDataSource<Message> = new MatTableDataSource([]);
  displayedColumns = ["Name", "Message", "Time"];
  constructor(private http: HttpClient) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  getMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(URL);
  }

  ngAfterViewInit() { }

  ngOnInit() {
    this.getMessages()
      .subscribe((res) => {
        this.messages = res;
        this.dataSource.data = this.messages.messages;
      });

    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
  }

}


