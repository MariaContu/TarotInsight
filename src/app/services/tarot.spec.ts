import { TestBed } from '@angular/core/testing';

import { Tarot } from './tarot';

describe('Tarot', () => {
  let service: Tarot;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarot);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
