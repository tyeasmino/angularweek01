import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { ResouceComponent } from './pages/resouce/resouce.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    SupportComponent,
    ResouceComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
