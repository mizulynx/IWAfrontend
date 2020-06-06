import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ParticipantZoneComponent } from './participant-zone/participant-zone.component';
import { RulesComponent } from './rules/rules.component';
import { PlanComponent } from './plan/plan.component';
import { DataComponent } from './data/data.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ParticipantZoneComponent,
    RulesComponent,
    PlanComponent,
    DataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
