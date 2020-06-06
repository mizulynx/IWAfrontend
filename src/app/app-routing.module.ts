import { RulesComponent } from './rules/rules.component';
import { DataComponent } from './data/data.component';
import { PlanComponent } from './plan/plan.component';
import { InfoComponent } from './info/info.component';
import { ParticipantZoneComponent } from './participant-zone/participant-zone.component';
import { StartComponent } from './start/start.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  //{path: 'rules', component: ContactComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'data', component: DataComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'participantzone', component: ParticipantZoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
