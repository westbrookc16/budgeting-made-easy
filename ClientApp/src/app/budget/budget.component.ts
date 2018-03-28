import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit  {
  currBudget: budget;
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    
  }
  ngOnInit() {
    console.log("oninit is here.");
    var url = this.baseUrl + 'api/budget/getbudget/5/2018';
    
    this.http.get<budget>(url).subscribe(result => {
      console.log("resultMonth=" + result.month);
      this.currBudget = result;
      
    }, error => console.error(error));  
  }
}
