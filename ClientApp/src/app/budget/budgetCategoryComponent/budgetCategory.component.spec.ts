import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCategoryComponent } from './budgetCategory.component';

describe('CategoryComponent', () => {
  let component: BudgetCategoryComponent;
  let fixture: ComponentFixture<BudgetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
