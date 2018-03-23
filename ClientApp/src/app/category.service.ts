import { Injectable } from '@angular/core';
import { Category } from './classes/category';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class CategoryService {
  calcTotalSpent(catList: Category[]): number {
    let totalIncome: number = 0;
    for (let i = 0; i < catList.length; i++) {
      totalIncome += catList[i].amount;
    }
    return totalIncome;
  }
  constructor() { }

}
