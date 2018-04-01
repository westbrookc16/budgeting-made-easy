import { Component, OnInit, Input } from '@angular/core';
import { budgetCategoryComponent } from '../budgetCategory/budgetCategory.component';
import { BudgetCategory } from '../classes/BudgetCategory';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  cat: BudgetCategory = new BudgetCategory();
  @Input() budgetID: number = 0;
  constructor(private catservice: CategoryService) { }
  add() {
    this.cat.budgetID = this.budgetID;
    this.catservice.add(this.cat);
    
  }
  ngOnInit() {
  }

}
