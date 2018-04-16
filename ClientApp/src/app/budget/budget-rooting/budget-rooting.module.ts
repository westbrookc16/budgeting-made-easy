import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from '../budgetComponent/budget.component';

const appRoots: Routes = [
  { path: 'budget/:month/:year', component: BudgetComponent },
  { path: 'budget', component: BudgetComponent }
];

@NgModule({
  imports: [
    
    RouterModule.forChild(appRoots),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class BudgetRootingModule { }
