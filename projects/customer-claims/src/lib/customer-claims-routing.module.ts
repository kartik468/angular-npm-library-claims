import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'claims-home',
    component: HomeComponent
  },
  {
    path: 'claims-about',
    component: AboutComponent
  }
  // {
  //   path: '',
  //   redirectTo: '/claims-home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerClaimsRoutingModule {}
