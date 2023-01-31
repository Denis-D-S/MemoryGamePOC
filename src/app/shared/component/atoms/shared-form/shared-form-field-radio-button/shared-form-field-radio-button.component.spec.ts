import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormFieldRadioButtonComponent } from './shared-form-field-radio-button.component';

describe('SharedFormFieldRadioButtonComponent', () => {
  let component: SharedFormFieldRadioButtonComponent;
  let fixture: ComponentFixture<SharedFormFieldRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormFieldRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFormFieldRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
