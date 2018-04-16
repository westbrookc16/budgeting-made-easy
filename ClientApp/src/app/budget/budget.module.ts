import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BudgetComponent } from './budgetComponent/budget.component';
import { BudgetCategoryComponent } from './budgetCategoryComponent/budgetCategory.component';
import { AddCategoryComponent } from './add-categoryComponent/add-category.component';
import { BudgetService } from './services/budget.service';
import { CategoryService } from './services/category.service';
import { FormsModule } from '@angular/forms';
import { BudgetRootingModule } from './budget-rooting/budget-rooting.module';
@NgModule({
  imports: [
    CommonModule, FormsModule, CurrencyMaskModule
  ],
  exports: [BudgetRootingModule],
  declarations: [BudgetCategoryComponent, BudgetComponent, AddCategoryComponent],
  providers: [BudgetService, CategoryService]
})
export class BudgetModule { }
