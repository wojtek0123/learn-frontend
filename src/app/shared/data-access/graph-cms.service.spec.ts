import { TestBed } from '@angular/core/testing';

import { RecordsService } from './graph-cms.service';

describe('RecordsService', () => {
  let service: RecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('', (done: DoneFn) => {
  //   service.getData('angular').subscribe(value => {
  //     expect(value).toBe({ records: [] });
  //     done();
  //   });
  // });
});
