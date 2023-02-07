import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckScreenComponent } from './deck-screen.component';

describe('DeckScreenComponent', () => {
  let component: DeckScreenComponent;
  let fixture: ComponentFixture<DeckScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
