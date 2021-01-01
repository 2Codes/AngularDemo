import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeService} from './home.service';
import { RouterModule } from '@angular/router'; //import this if you want to reference a url through routerlink

@NgModule({
    imports: [HomeRoutingModule, RouterModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [HomeService],
})
export class HomeModule {}