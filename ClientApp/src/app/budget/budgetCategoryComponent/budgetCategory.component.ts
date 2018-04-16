import { Component, OnInit } from '@angular/core';
import { Input, Inject } from '@angular/core';
//import { inject } from '@angular/core/testing';
import { BudgetCategory } from '../classes/BudgetCategory';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../services/category.service';
import { BudgetService } from '../services/budget.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budgetCategory.component.html',
  styleUrls: ['./budgetCategory.component.css'],
  //providers: [CategoryService]
})
export class BudgetCategoryComponent implements OnInit, OnChanges {
  categories: BudgetCategory[] = [];
  deleteCategory(cat: BudgetCategory) {
    if (confirm("are you sure you want to delete the " + cat.name + ' category? Click OK to delete.'))
      this.catService.deleteBudgetCategory(cat);
  }
  year: number;
  month: number;
  budgetID: number = 0;




  constructor(private catService: CategoryService, private budgetService: BudgetService) {

  }

  ngOnInit() {
    this.budgetService.currBudget$.subscribe(result => {
      if (result == null || result.budgetID == -1) {
        this.categories = [];
      }
      else {
        this.budgetID = result.budgetID;
        this.year = result.year;
        this.month = result.month;
        this.catService.getBudgetCategories(this.budgetID).subscribe(result => {

          this.categories = result;
        });
      }
    });
    this.catService.newCat$.subscribe(result => {
      this.categories.push(result);
    });


    this.catService.deletedCategory$.subscribe(result => {
      for (var i = 0; i < this.categories.length; i++) {
        if (this.categories[i].budgetCategoryID == result.budgetCategoryID) {
          this.categories.splice(i, 1);
        }
      }
    });
  }
  ngOnChanges() {

  }
}
