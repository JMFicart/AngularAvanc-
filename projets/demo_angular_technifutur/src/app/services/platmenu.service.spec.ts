import { TestBed } from '@angular/core/testing';

import { PlatmenuService } from './platmenu.service';

describe('PlatmenuService', () => {
  let service: PlatmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
