import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Budget } from '../classes/budget';
import { HttpClient } from '@angular/common/http';
import { BudgetService } from '../services/budget.service';
//import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { isNumber } from 'util';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
  validNumber(i: FormControl) {
    if (!isNaN(+i.value)) {
      return null;
    }
    else {
      
      return { isNumber: 'Must be a number' };
    }
  }

  //getters for template
  get totalIncome() {
    return this.budgetForm.get('totalIncome');
  }
  currBudget: Budget = new Budget();
  budgetForm: FormGroup;
  createForm() {
    this.budgetForm = this.fb.group({
      month: '',
      year: '',
      totalIncome: ['0', [this.validNumber, Validators.required]]
    });
    
  }
  constructor(private budgetService: BudgetService, private catService: CategoryService, private route: ActivatedRoute, private router: Router, private auth: AuthService, private fb: FormBuilder) {

    this.createForm();
  }
  changeBudget() {

    this.router.navigateByUrl('budget/' + this.budgetForm.get('month').value + '/' + this.budgetForm.get('year').value);
  }
  add() {
    this.currBudget.totalIncome = this.budgetForm.get('totalIncome').value;
    this.budgetService.add(this.currBudget);
  }
  
  ngOnInit() {




    
    this.budgetService.currBudget$.subscribe(result => {


      this.currBudget = result;
      //this.currBudget.totalLeftToBudget = this.currBudget.totalIncome - this.currBudget.totalSpent;
      this.budgetForm.patchValue(result);
    });
    this.catService.deletedCategory$.subscribe(result => {
      this.currBudget.totalSpent -= result.amount;
      this.currBudget.totalLeftToBudget = this.currBudget.totalIncome - this.currBudget.totalSpent;
      
    });
    this.catService.difference$.subscribe(res => {
      this.currBudget.totalSpent = this.currBudget.totalSpent + res;
      this.currBudget.totalLeftToBudget = this.currBudget.totalIncome - this.currBudget.totalSpent;
    })
    this.catService.newCat$.subscribe(result => {
      this.currBudget.totalSpent += result.amount;
      this.currBudget.totalLeftToBudget = this.currBudget.totalIncome - this.currBudget.totalSpent;
    });


    this.route.paramMap.switchMap((params: ParamMap) => {

      if (params.get('month') == null) {
        console.log("rout is null");
        return this.budgetService.getBudget(new Date().getMonth() + 1, new Date().getFullYear());

      }
      console.log("rout is not null");
      return this.budgetService.getBudget(+params.get('month'), +params.get('year'));
    }).subscribe(res => {
      console.log("running observable.");
      this.budgetService.broadcastBudget(res);

    });



  }

}
//}
