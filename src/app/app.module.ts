import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
