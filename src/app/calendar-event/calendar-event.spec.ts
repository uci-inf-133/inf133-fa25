import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEvent } from './calendar-event';

describe('CalendarEvent', () => {
  let component: CalendarEvent;
  let fixture: ComponentFixture<CalendarEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
