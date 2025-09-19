import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3 } from './a3';

describe('A3', () => {
  let component: A3;
  let fixture: ComponentFixture<A3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
