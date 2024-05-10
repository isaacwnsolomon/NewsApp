import { TestBed } from '@angular/core/testing';

import { ReadLaterService } from './read-later-articles.service';

describe('ReadLaterArticlesService', () => {
  let service: ReadLaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadLaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
