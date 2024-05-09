import { TestBed } from '@angular/core/testing';

import { ReadLaterArticlesService } from './read-later-articles.service';

describe('ReadLaterArticlesService', () => {
  let service: ReadLaterArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadLaterArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
