import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BudgetCategory } from '../classes/BudgetCategory';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  /// source for adding new category to observable
  private newCatSource = new Subject<BudgetCategory>();

  /// observable for new categories when they are added
  newCat$ = this.newCatSource.asObservable();
  private deletedCatSource: Subject<BudgetCategory> = new Subject<BudgetCategory>();
  deletedCategory$ = this.deletedCatSource.asObservable();
  private difference: Subject<number> = new Subject<number>();
  difference$ = this.difference.asObservable();
  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }

  edit(c: BudgetCategory) {
    this.http.post<number>(this.baseUrl + 'api/budgetcategory/edit', c).subscribe(res => {
      this.difference.next(res);
    });
  }
  deleteBudgetCategory(cat: BudgetCategory) {
    this.http.put<BudgetCategory>(this.baseUrl + 'api/budgetcategory/delete', cat).subscribe(result => {
      this.deletedCatSource.next(result);
    });
    //this.deletedCatSource.next(cat);
  }
  getBudgetCategories(budgetID: number) {
    const url = this.baseUrl + 'api/budgetcategory/getAll/' + budgetID + '?id=' + +new Date();

    return this.http.get<BudgetCategory[]>(url);
  }

  add(c: BudgetCategory) {

    this.http.post<BudgetCategory>(this.baseUrl + 'api/budgetCategory/add', c).subscribe(result => {
      this.newCatSource.next(result);
    });
  }
}
