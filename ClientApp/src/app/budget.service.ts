import { Injectable, Inject } from '@angular/core';
import { Budget } from './classes/budget';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BudgetService {

  constructor( @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }
  getBudget(month: number, year: number) {

    let url = this.baseUrl + 'api/budget/getbudget/' + month + '/' + year;
    return this.http.get<Budget>(url);
  }
  add(b: Budget) {
    return this.http.post<Budget>(this.baseUrl + 'api/budget/add', b);
  }
}
