import { TestBed, inject } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetService]
    });
  });

  it('should be created', inject([BudgetService], (service: BudgetService) => {
    expect(service).toBeTruthy();
  }));
});
