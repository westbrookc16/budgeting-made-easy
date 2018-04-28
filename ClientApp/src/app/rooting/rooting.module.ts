import { NgModule, Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from '../callback/callback.component';
import { HelpComponent } from '../help/help.component'
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'help', component: HelpComponent },
      { path: 'callback', component: CallbackComponent },
      { path: 'login', component: LoginComponent }

    ]),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RootingModule { }
