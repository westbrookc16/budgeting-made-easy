import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BudgetComponent } from './budget/budget.component';
import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core/src/metadata/directives';
import { budgetCategoryComponent } from './budgetCategory/budgetCategory.component';
//import { CategoryListComponent } from './category-list/category-list.component';
import { BudgetService } from './services/budget.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './services/category.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BudgetComponent,
    budgetCategoryComponent,
    AddCategoryComponent, LoginComponent
  ],
  providers: [BudgetService, CategoryService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'budget', component: BudgetComponent },
      { path: 'login', component: LoginComponent }

    ]),
    CurrencyMaskModule

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
