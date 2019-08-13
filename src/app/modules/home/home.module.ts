import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeLeftComponent } from './home-left/home-left.component';
import { LoginRightComponent } from './login-right/login-right.component';

@NgModule({
  declarations: [HomeComponent, HomeLeftComponent, LoginRightComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }