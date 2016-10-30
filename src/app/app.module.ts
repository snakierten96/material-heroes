import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }     from './app.component';
import { HeroesModule }     from './heroes';
import { DashboardModule }  from './dashboard';

import { HeroesService, HeroesSearchService, InMemoryDataService } from './heroes/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    HeroesModule,
    DashboardModule
  ],
  providers: [
    Title,
    HeroesService,
    HeroesSearchService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
