import {TestBed} from '@angular/core/testing';

import {TableDataResolver} from './table-data.resolver';

describe('TableDataResolver', () => {
  let resolver: TableDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TableDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
