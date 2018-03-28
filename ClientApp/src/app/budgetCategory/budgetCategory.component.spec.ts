import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { budgetCategoryComponent } from './budgetCategory.component';

describe('CategoryComponent', () => {
  let component: budgetCategoryComponent;
  let fixture: ComponentFixture<budgetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ budgetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(budgetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
