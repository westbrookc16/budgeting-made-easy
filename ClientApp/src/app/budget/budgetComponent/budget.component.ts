import { Component, Inject, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';
import { HttpClient } from '@angular/common/http';
import { BudgetService } from '../services/budget.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../services/category.service';

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
    this.budgetService.add(this.currBudget);
  }
  ngOnInit() {
    this.budgetService.currBudget$.subscribe(result => {
      if (result == null || result.budgetID == -1) {
        this.currBudget.totalIncome = 0;
        this.currBudget.totalSpent = 0;
        this.currBudget.budgetID= -1;
        
      }
      else {
        this.currBudget = result;
      }
    });
    this.catService.deletedCategory$.subscribe(result => {
      this.currBudget.totalSpent -= result.amount;
      console.log("deleted category subscription");
    });
    this.catService.newCat$.subscribe(result => {
      this.currBudget.totalSpent += result.amount;
    })


    this.budgetService.getBudget(this.currBudget.month, this.currBudget.year);
  }
}