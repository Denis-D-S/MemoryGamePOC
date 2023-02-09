import { TestBed } from '@angular/core/testing';

import { CardPairService } from './card-pair.service';

describe('CardPairService', () => {
  let service: CardPairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
