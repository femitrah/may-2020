import { TestBed } from '@angular/core/testing';

import { LoginverifyGuard } from './loginverify.guard';

describe('LoginverifyGuard', () => {
  let guard: LoginverifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginverifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
