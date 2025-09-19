import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2 } from './a2';

describe('A2', () => {
  let component: A2;
  let fixture: ComponentFixture<A2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
