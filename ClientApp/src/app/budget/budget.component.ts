import { Component, Inject, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';
import { HttpClient } from '@angular/common/http';
import { BudgetService } from '../budget.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
  currBudget: Budget = new Budget();

  constructor(private budgetService: BudgetService) {

  }
  changeBudget() {
    this.budgetService.getBudget(this.currBudget.month, this.currBudget.year).subscribe(result => {
      if (result != null)
        this.currBudget = result;
      else {
        this.currBudget.budgetID = -1;
        this.currBudget.totalIncome = 0;
        this.currBudget.totalSpent = 0;
      }
    });
  }
  ngOnInit() {




    this.budgetService.getBudget(this.currBudget.month, this.currBudget.year).subscribe(result => { this.currBudget = result;
  });
  }
}
