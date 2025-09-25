import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeUtils } from '../time-utils';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  assignments:any[] = [];
  lectures:any[] = [];

  constructor(private http:HttpClient) {
  	this.http.get('./calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  parseCalendar(calendar:any) {
    let events:any[] = calendar['events'];
    //Add date string to each event
    events.map(e => {
      e.date = TimeUtils.createFromString(e.date);
      e['dateStr'] = new Intl.DateTimeFormat('en-US', {weekday:'short', month:'short', day:'numeric'}).format(e.date);
      return e;
    });
    //Filter by type
    this.assignments = events.filter(e => e['type'] == 'assignment');
    this.lectures = events.filter(e => e['type'] == 'lecture' || e['type'] == 'discussion');
    //Filter by past/future
    this.assignments = this.assignments.filter(e => new Date() < e.date).slice(0, 2);
    this.lectures = this.lectures.filter(e => new Date() > e.date);
    this.lectures = this.lectures.reverse().slice(0, 5);
  }
}
