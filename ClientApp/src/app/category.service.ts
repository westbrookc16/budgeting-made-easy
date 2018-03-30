import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BudgetCategory } from './classes/BudgetCategory';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor( @Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }


  getBudgetCategories(budgetID: number) {
    const url = this.baseUrl + 'api/budgetcategory/getAll/' + budgetID;
    
      return this.http.get<BudgetCategory[]>(url);
}
}
