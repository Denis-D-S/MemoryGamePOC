import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedChipComponent } from './shared-chip.component';

describe('SharedChipComponent', () => {
  let component: SharedChipComponent;
  let fixture: ComponentFixture<SharedChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
