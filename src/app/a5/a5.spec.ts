import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A5 } from './a5';

describe('A5', () => {
  let component: A5;
  let fixture: ComponentFixture<A5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
