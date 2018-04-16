import { Injectable, Inject } from '@angular/core';
import { Budget } from '..//classes/budget';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BudgetService {
  //subjects and observables
  private currBudgetSource: Subject<Budget> = new Subject<Budget>();
  currBudget$ = this.currBudgetSource.asObservable();
  constructor( @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }
  getBudget(month: number, year: number) {

    let url = this.baseUrl + 'api/budget/getbudget/' + month + '/' + year;

    this.http.get<Budget>(url).subscribe(result => {
      this.currBudgetSource.next(result);
    });
    
  }
  add(b: Budget) {
    return this.http.post<Budget>(this.baseUrl + 'api/budget/add', b).subscribe(result => {
      this.currBudgetSource.next(result);
    });
  }
}
