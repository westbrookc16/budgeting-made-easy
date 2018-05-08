import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BudgetCategory } from '../classes/BudgetCategory';
import { BudgetService } from '../services/budget.service';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {
  isNumeric(i: FormControl) {
    if (isNaN(+i.value)) {
      return { isNumber: 'must be numeric' };
    }
    else {
      return null;
    }
  }
  cat: BudgetCategory = new BudgetCategory();
  budgetID: number = 0;
  addCategory: FormGroup;
  get name() {
    return this.addCategory.get('name');
  }
  get amount() {
    return this.addCategory.get('amount');
  }
  createForm() {
    this.addCategory = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required,this.isNumeric ]],
        isRecurring: false
    });
  }
  constructor(private catservice: CategoryService, private budgetService: BudgetService, private fb: FormBuilder) {
    this.createForm();
  }
  add() {
    if (this.addCategory.valid) {
      this.cat.budgetID = this.budgetID;
      this.cat.isRecurring = this.addCategory.get('isRecurring').value;
      this.cat.name = this.addCategory.get('name').value;
      this.cat.amount = this.addCategory.get('amount').value;
      this.catservice.add(this.cat);
    }
    else {
      alert("Please check that you entered a name and the amount is numeric");
    }
  }
  ngOnInit() {
    this.budgetService.currBudget$.subscribe(result => {
      if (result == null) {
        this.budgetID = -1;
        
      }
      else
      this.budgetID = result.budgetID;
    });
    this.catservice.newCat$.subscribe(res => {
      this.cat.name = '';
      this.cat.amount = 0;
      this.cat.isRecurring = false;
      this.addCategory.patchValue(this.cat);
    });
  }

}
