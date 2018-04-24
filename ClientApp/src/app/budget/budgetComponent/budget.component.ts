import { Component, Inject, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';
import { HttpClient } from '@angular/common/http';
import { BudgetService } from '../services/budget.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {

  currBudget: Budget = new Budget();

  constructor(private budgetService: BudgetService, private catService: CategoryService, private route: ActivatedRoute, private router: Router, private auth: AuthService) {

  }
  changeBudget() {
    console.log("running onchange" + this.currBudget.month);
    this.router.navigateByUrl('budget/' + this.currBudget.month + '/' + this.currBudget.year);
  }
  add() {
    this.budgetService.add(this.currBudget);
  }
  profile: any;
  ngOnInit() {





    this.budgetService.currBudget$.subscribe(result => {
      /*if (result == null || result.budgetID == -1) {
        this.currBudget.totalIncome = 0;
        this.currBudget.totalSpent = 0;
        this.currBudget.budgetID = -1;

      }*/
      //else {
      this.currBudget = result;
      //}
    });
    this.catService.deletedCategory$.subscribe(result => {
      this.currBudget.totalSpent -= result.amount;
      console.log("deleted category subscription");
    });
    this.catService.newCat$.subscribe(result => {
      this.currBudget.totalSpent += result.amount;
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
