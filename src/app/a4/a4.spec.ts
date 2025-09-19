import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4 } from './a4';

describe('A4', () => {
  let component: A4;
  let fixture: ComponentFixture<A4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
