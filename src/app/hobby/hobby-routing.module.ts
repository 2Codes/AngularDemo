import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HobbyComponent} from './hobby.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'hobby', component: HobbyComponent}
        ])
    ]
})
export class HobbyRoutingModule {
    
}