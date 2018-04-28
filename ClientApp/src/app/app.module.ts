import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RootingModule } from '../app/rooting/rooting.module';
import { AppComponent } from './app.component';
import { BudgetModule } from './budget/budget.module';
import { CallbackComponent } from './callback/callback.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
//import { CategoryListComponent } from './category-list/category-list.component';
//import { AddCategoryComponent } from './add-category/add-category.component';
//import { CategoryService } from './services/category.service';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './focus.directive';



@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    FocusDirective
    

  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BudgetModule,
    RootingModule
    

    
    

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
