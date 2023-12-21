import { TestBed } from '@angular/core/testing';

import { GroupFirestoreService } from './group-firestore.service';

describe('GroupFirestoreService', () => {
  let service: GroupFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
