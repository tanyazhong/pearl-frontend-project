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
  displayedColumns = ["Name", "Message", "Date & Time"];
  pageSizeOptions = [6, 12, 18]
  constructor(private http: HttpClient) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  getMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(URL);
  }

  ngOnInit() {
    /* GET API RESPONSE */
    this.getMessages()
      .subscribe((res) => {
        this.messages = res;
        this.dataSource.data = this.messages.messages;
      });

    /* link sorter to data */
    this.dataSource.sort = this.sort;

    /* let sorter know where to find the data to be sorted */
    this.dataSource.sortingDataAccessor = (entry, property) => {
      if (property === 'Name') {
        return entry.first_name;
      }
      else if (property == 'Message') {
        return entry.messages[0].body;
      }
      else if (property == 'Date & Time') {
        return entry.messages[0].date_completed.$date;
      }
      else {
        return entry[property];
      }
    };

    /* link paginator to data */
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });

    this.dataSource.filterPredicate = (entry, filter) => {
      var dataStr = entry.first_name + " " + entry.last_name + " " + entry.messages[0].body;
      dataStr = dataStr.trim().toLocaleLowerCase();
      return dataStr.indexOf(filter) != -1;
    }
  }

  /* executes filtering upon user input */
  public applyFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}


