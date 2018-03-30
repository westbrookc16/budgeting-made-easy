import { Component, OnInit } from '@angular/core';
import { BudgetCategory } from '../classes/budgetcategory';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: BudgetCategory[];
  constructor() { }

  ngOnInit() {
  }

}
