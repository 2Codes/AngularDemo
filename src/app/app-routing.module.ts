import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    /* 
    By default, NgModules are eagerly loaded, which means that as soon as the app loads.
    Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
    */
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
