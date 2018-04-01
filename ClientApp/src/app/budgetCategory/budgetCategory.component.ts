import { Component, OnInit } from '@angular/core';
import { Input, Inject } from '@angular/core';
//import { inject } from '@angular/core/testing';
import { BudgetCategory } from '../classes/BudgetCategory';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budgetCategory.component.html',
  styleUrls: ['./budgetCategory.component.css'],
  //providers: [CategoryService]
})
export class budgetCategoryComponent implements OnInit, OnChanges {
  categories: BudgetCategory[] = [];
  @Input() year: number;
  @Input() month: number;
  _budgetID: number;
  @Input() set budgetID(value: number) {
    this._budgetID = value;
    this.catService.getBudgetCategories(this._budgetID).subscribe(result => { this.categories = result; });
    
  };
  constructor(private catService: CategoryService) {

  }

  ngOnInit() {
    this.catService.newCat$.subscribe(result => {
      this.categories.push(result);
    });
    //this.http.get<BudgetCategory[]>(this.baseUrl + 'api/budgetCategory/getAll/' + this.budgetID).subscribe(result => { this.categories = result; }, error => {
//      console.error(error);
    //});
  }
  ngOnChanges(){
  
}
}
