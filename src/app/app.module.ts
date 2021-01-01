import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

//Register your components (also in the RouterModule below)
import { HomeComponent } from './home/home.component';
import { HobbyComponent } from './hobby/hobby.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HobbyComponent, NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: HomeComponent },
      { path: 'hobby', component: HobbyComponent },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
