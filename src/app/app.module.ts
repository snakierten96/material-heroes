import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { HeroesModule } from './heroes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HeroesModule
  ],
  providers: [
    Title,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
