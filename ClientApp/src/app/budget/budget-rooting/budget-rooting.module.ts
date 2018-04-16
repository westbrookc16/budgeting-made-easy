import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from '../budgetComponent/budget.component';
import { AuthGuard } from '../../auth.guard';
const appRoots: Routes = [
  { path: 'budget/:month/:year', component: BudgetComponent, canActivate: [AuthGuard]  },
  { path: 'budget', component: BudgetComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [

    RouterModule.forChild(appRoots),
  ],
  declarations: [],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class BudgetRootingModule { }
