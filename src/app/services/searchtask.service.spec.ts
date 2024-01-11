import { TestBed } from '@angular/core/testing';

import { SearchtaskService } from './searchtask.service';

describe('SearchtaskService', () => {
  let service: SearchtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
