import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTestComponent } from './prime-test.component';

describe('PrimeTestComponent', () => {
  let component: PrimeTestComponent;
  let fixture: ComponentFixture<PrimeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeTestComponent]
    });
    fixture = TestBed.createComponent(PrimeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
