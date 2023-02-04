import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFlippingCardComponent } from './one-flipping-card.component';

describe('OneFlippingCardComponent', () => {
  let component: OneFlippingCardComponent;
  let fixture: ComponentFixture<OneFlippingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFlippingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFlippingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
