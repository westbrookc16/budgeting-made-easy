import { Component, OnInit } from '@angular/core';
import { Budget } from '../classes/budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  currBudget: Budget = new Budget();

  constructor() { }

  ngOnInit() {
    this.currBudget.year = 2018;    

    
  }

}
