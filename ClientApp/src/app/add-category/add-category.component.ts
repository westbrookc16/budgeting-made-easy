import { Component, OnInit, Input } from '@angular/core';
import { budgetCategoryComponent } from '../budgetCategory/budgetCategory.component';
import { BudgetCategory } from '../classes/BudgetCategory';
import { CategoryService } from '../category.service';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  cat: BudgetCategory = new BudgetCategory();
  budgetID: number = 0;
  constructor(private catservice: CategoryService, private budgetService: BudgetService) { }
  add() {
    this.cat.budgetID = this.budgetID;
    this.catservice.add(this.cat);
    
  }
  ngOnInit() {
    this.budgetService.currBudget$.subscribe(result => {
      this.budgetID = result.budgetID;
    });

  }

}
