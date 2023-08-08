/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellerAuthComponent } from './seller-auth.component';

describe('SellerAuthComponent', () => {
  let component: SellerAuthComponent;
  let fixture: ComponentFixture<SellerAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
