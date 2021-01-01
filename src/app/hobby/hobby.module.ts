import {NgModule} from '@angular/core';
import {HobbyComponent} from './hobby.component';
import {HobbyRoutingModule} from './hobby-routing.module';

@NgModule({
    imports: [HobbyRoutingModule],
    declarations: [HobbyComponent],
    exports: [HobbyComponent],
})
export class HobbyModule {}