import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormFieldCheckboxComponent } from './shared-form-field-checkbox.component';

describe('SharedFormFieldCheckboxComponent', () => {
  let component: SharedFormFieldCheckboxComponent;
  let fixture: ComponentFixture<SharedFormFieldCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormFieldCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormFieldCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
