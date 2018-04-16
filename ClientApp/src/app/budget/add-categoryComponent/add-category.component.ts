import { Component, OnInit, Input } from '@angular/core';
import { budgetCategoryComponent } from '../budgetCategoryComponent/budgetCategory.component'
import { BudgetCategory } from '../classes/BudgetCategory';
import { CategoryService } from '../services/category.service';
import { BudgetService } from '../services/budget.service';

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
      if (result == null) {
        this.budgetID = -1;
        
      }
      else
      this.budgetID = result.budgetID;
    });

  }

}
