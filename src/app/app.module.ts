import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerClaimsModule } from 'projects/customer-claims/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [AppComponent, AppHomeComponent],
  imports: [BrowserModule, CustomerClaimsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
