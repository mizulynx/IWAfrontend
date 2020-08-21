import { ArtistComponent } from './artist/artist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RulesComponent } from './rules/rules.component';
import { DataComponent } from './data/data.component';
import { PlanComponent } from './plan/plan.component';
import { ParticipantZoneComponent } from './participant-zone/participant-zone.component';
import { StartComponent } from './start/start.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import {ParticipantListComponent} from './participant-list/participant-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'data', component: DataComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: RegisterComponent },
  {path: 'participantzone', component: ParticipantZoneComponent},
  {path: 'artist', component: ArtistListComponent},
  {path: 'participant', component: ParticipantListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
