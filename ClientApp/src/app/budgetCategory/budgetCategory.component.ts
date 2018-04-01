import { Component, OnInit } from '@angular/core';
import { Input, Inject } from '@angular/core';
//import { inject } from '@angular/core/testing';
import { BudgetCategory } from '../classes/BudgetCategory';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../category.service';
import { BudgetService } from '../budget.service';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budgetCategory.component.html',
  styleUrls: ['./budgetCategory.component.css'],
  //providers: [CategoryService]
})
export class budgetCategoryComponent implements OnInit, OnChanges {
  categories: BudgetCategory[] = [];
  deleteCategory(cat: BudgetCategory) {

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
        this.catService.getBudgetCategories(this._budgetID).subscribe(result => {

          this.categories = result;
        });
      }
    });
    this.catService.newCat$.subscribe(result => {
      this.categories.push(result);
    });


    this.catService.deletedCategory$.subscribe(result => {
      this.categories.splice(this.categories.indexOf(result), 1);
    });
  }
  ngOnChanges() {

  }
}
