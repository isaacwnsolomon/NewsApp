import { TestBed } from '@angular/core/testing';

import { FavouriteArticlesService } from './favourite-articles.service';

describe('FavouriteArticlesService', () => {
  let service: FavouriteArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
