import { OnInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../classes/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  @Output()
  categoryChange = new EventEmitter<number>();
  addCategory(i: Category) {
    console.log('addToList');
    this.categories.push(i);
    this.categoryChange.emit(this.categoryService.calcTotalSpent(this.categories));
  } 
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories.push({
      amount: 22, id: 1, name: 'test', budgetID: 33
    });
    this.categoryChange.emit(this.categoryService.calcTotalSpent(this.categories));
  }

}
