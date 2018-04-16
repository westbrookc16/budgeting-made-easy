import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budgetComponent/budget.component';
import { BudgetCategoryComponent } from './budgetCategoryComponent/budgetCategory.component';
import { AddCategoryComponent } from './add-categoryComponent/add-category.component';
import { BudgetService } from './services/budget.service';
import { CategoryService } from './services/category.service';
import { FormsModule } from '@angular/forms';
import { BudgetRootingModule } from './budget-rooting/budget-rooting.module';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [BudgetRootingModule],
  declarations: [BudgetCategoryComponent, BudgetComponent, AddCategoryComponent],
  providers: [BudgetService, CategoryService]
})
export class BudgetModule { }
