import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes : Routes =[
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"",redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
