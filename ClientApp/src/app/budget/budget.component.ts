import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent  {
  currBudget: budget;
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    var url = baseUrl + 'api/budget/getbudget/5/2018';
    console.log(url);
    http.get<budget>(url).subscribe(result => {
      console.log(result.month);
      this.currBudget = result;
      console.log(result.totalIncome);
    }, error => console.error(error));  
  }
}
