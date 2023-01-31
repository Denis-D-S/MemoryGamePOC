import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormFieldDateComponent } from './shared-form-field-date.component';

describe('SharedFormFieldDateComponent', () => {
  let component: SharedFormFieldDateComponent;
  let fixture: ComponentFixture<SharedFormFieldDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormFieldDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormFieldDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
