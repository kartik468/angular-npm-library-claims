import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {
    path: 'app-home',
    component: AppHomeComponent
  },
  { path: 'claims', loadChildren: () => import('./customer-claims-wrapper/claims/claims.module').then(m => m.ClaimsModule) }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
