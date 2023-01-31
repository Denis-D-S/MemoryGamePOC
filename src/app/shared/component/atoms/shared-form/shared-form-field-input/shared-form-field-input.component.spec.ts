import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormFieldInputComponent } from './shared-form-field-input.component';

describe('SharedFormFieldInputComponent', () => {
  let component: SharedFormFieldInputComponent;
  let fixture: ComponentFixture<SharedFormFieldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormFieldInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormFieldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
