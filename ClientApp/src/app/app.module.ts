import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RootingModule } from '../app/rooting/rooting.module';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BudgetComponent } from './budget/budgetComponent/budget.component';
import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core/src/metadata/directives';
import { budgetCategoryComponent } from './budget/budgetCategoryComponent/budgetCategory.component';
//import { CategoryListComponent } from './category-list/category-list.component';

//import { AddCategoryComponent } from './add-category/add-category.component';
//import { CategoryService } from './services/category.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

import { AuthInterceptor } from './services/auth.interceptor';
import { AuthResponseInterceptor } from './services/auth.response.interceptor';
import { BudgetRootingModule } from './budget/budget-rooting/budget-rooting.module';
import { AddCategoryComponent } from './budget/add-categoryComponent/add-category.component';
import { CategoryService } from './budget/services/category.service';
import { BudgetService } from './budget/services/budget.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    BudgetComponent,
    budgetCategoryComponent,
    AddCategoryComponent
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true
    }, CategoryService, BudgetService
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BudgetRootingModule,
    RootingModule,

    
    //CurrencyMaskModule

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
