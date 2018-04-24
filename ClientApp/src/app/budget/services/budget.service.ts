import { Injectable, Inject } from '@angular/core';
import { Budget } from '..//classes/budget';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BudgetService {
  //subjects and observables
  private currBudgetSource: Subject<Budget> = new Subject<Budget>();
  currBudget$ = this.currBudgetSource.asObservable();
  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }
  broadcastBudget(c: Budget) {
    this.currBudgetSource.next(c);
  }
  getBudget(month: number, year: number) {

    let url = this.baseUrl + 'api/budget/getbudget/' + month + '/' + year;

    return this.http.get<Budget>(url);
    
  }
  add(b: Budget) {
    return this.http.post<Budget>(this.baseUrl + 'api/budget/add', b);
      
  }
}
