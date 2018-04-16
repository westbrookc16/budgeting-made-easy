import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'counter', component: CounterComponent },
      //      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }

    ]),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RootingModule { }
