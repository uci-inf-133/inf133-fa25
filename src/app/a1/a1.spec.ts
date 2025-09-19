import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1 } from './a1';

describe('A1', () => {
  let component: A1;
  let fixture: ComponentFixture<A1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
