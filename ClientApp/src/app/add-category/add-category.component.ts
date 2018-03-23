import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../classes/category';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  cat: Category = new Category();
  @Output()
  addCategory = new EventEmitter<Category>();
  clkAdd() {
    this.addCategory.emit(this.cat);
    console.log('test');
  }
  constructor() { }

  ngOnInit() {
  }

}
