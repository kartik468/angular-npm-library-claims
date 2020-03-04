import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerClaimsRoutingModule } from './customer-claims-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, CustomerClaimsRoutingModule],
  exports: [HomeComponent, AboutComponent]
})
export class CustomerClaimsModule {}
