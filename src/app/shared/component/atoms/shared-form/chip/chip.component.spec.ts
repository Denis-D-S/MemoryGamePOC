import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from 'src/app/shared/component/atoms/shared-form/chips/chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
