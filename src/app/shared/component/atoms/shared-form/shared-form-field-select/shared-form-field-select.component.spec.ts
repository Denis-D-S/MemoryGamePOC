import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFormFieldSelectComponent } from './shared-form-field-select.component';

describe('SharedFormFieldSelectComponent', () => {
  let component: SharedFormFieldSelectComponent;
  let fixture: ComponentFixture<SharedFormFieldSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFormFieldSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFormFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
