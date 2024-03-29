import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {ParticipantZoneComponent} from './participant-zone/participant-zone.component';
import {RulesComponent} from './rules/rules.component';
import {PlanComponent} from './plan/plan.component';
import {DataComponent} from './data/data.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { httpInterceptorProviders } from './auth-interceptor';
import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantComponent } from './participant/participant.component';
import { ArtistviewComponent } from './artistview/artistview.component';
import { ArtistviewListComponent } from './artistview-list/artistview-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ParticipantZoneComponent,
    RulesComponent,
    PlanComponent,
    DataComponent,
    LoginComponent,
    RegisterComponent,
    ArtistComponent,
    ArtistListComponent,
    ParticipantListComponent,
    ParticipantComponent,
    ArtistviewComponent,
    ArtistviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
