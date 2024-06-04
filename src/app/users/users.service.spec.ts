import { TestBed } from '@angular/core/testing';

import { usersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: usersService = TestBed.get(usersService);
    expect(service).toBeTruthy();
  });
});
