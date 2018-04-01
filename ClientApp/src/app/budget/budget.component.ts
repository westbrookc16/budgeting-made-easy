import { Component, Inject, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';
import { HttpClient } from '@angular/common/http';
import { BudgetService } from '../budget.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
  currBudget: Budget = new Budget();

  constructor(private budgetService: BudgetService, private catService: CategoryService) {

  }
  changeBudget() {
    this.budgetService.getBudget(this.currBudget.month, this.currBudget.year);
  }
  add() {
    this.budgetService.add(this.currBudget).subscribe(result => {
      //this.currBudget = result;
    });
  }
  ngOnInit() {
    this.budgetService.currBudget$.subscribe(result => {
      if (result.budgetID == -1) {
        this.currBudget.totalIncome = 0;
        this.currBudget.totalSpent = 0;

      }
      else {
        this.currBudget = result;
      }
    });
    this.catService.newCat$.subscribe(result => {
      this.currBudget.totalSpent += result.amount;
    })


    this.budgetService.getBudget(this.currBudget.month, this.currBudget.year);
  }
}
