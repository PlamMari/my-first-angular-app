import { TestBed } from '@angular/core/testing';

import { ModifyHttpInterceptor } from './modify-http.interceptor';

describe('ModifyHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ModifyHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ModifyHttpInterceptor = TestBed.inject(ModifyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
