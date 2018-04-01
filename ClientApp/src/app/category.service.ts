import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BudgetCategory } from './classes/BudgetCategory';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  private newCatSource = new Subject<BudgetCategory>();
  newCat$ = this.newCatSource.asObservable();
  constructor( @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }


  getBudgetCategories(budgetID: number) {
    const url = this.baseUrl + 'api/budgetcategory/getAll/' + budgetID;

    return this.http.get<BudgetCategory[]>(url);
  }
  
  add(c: BudgetCategory) {

    this.http.post<BudgetCategory>(this.baseUrl + 'api/budgetCategory/add', c).subscribe(result => {
      this.newCatSource.next(result);
    });
  }
}
