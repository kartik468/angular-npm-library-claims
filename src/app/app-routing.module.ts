import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { HomeComponent } from 'projects/customer-claims/src/public-api';

const routes: Routes = [
  {
    path: 'app-home',
    component: AppHomeComponent
  },
  {
    path: 'claims',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
