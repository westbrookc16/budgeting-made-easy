import { Component, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';
import { BudgetService } from '../budget.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  currBudget: Budget = new Budget();

  constructor(private budgetService: BudgetService, private categoryService: CategoryService) { }
  onCategoryChange(total: number) {
    this.currBudget.totalSpent = total;
    console.log("this event has run");
  }
  ngOnInit() {
    this.currBudget.year = 2018;
    //this.currBudget.totalSpent = this.categoryService.calcTotalSpent();
    
  }

}
