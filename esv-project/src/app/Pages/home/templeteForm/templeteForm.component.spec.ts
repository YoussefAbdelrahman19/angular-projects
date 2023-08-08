/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempleteFormComponent } from './templeteForm.component';

describe('TempleteFormComponent', () => {
  let component: TempleteFormComponent;
  let fixture: ComponentFixture<TempleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
