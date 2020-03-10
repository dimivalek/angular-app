import { TestBed } from '@angular/core/testing';

import { NotehttpmethodsService } from './notehttpmethods.service';

describe('NotehttpmethodsService', () => {
  let service: NotehttpmethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotehttpmethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
