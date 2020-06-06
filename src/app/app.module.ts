import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { ParticipantZoneComponent } from './participant-zone/participant-zone.component';
import { InfoComponent } from './info/info.component';
import { RulesComponent } from './rules/rules.component';
import { PlanComponent } from './plan/plan.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ParticipantZoneComponent,
    InfoComponent,
    RulesComponent,
    PlanComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
