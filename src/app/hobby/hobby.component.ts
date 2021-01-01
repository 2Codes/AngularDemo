import {Component, OnInit} from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'HobbyComponent', //this defines your component tag,
    templateUrl: './hobby.component.html',
})
export class HobbyComponent implements OnInit {

    hobbies: string[] = [];
    constructor(private _dataService: DataService) {}
    ngOnInit() {
        var myHobbies = this._dataService.getData("hobbies");
        if(myHobbies) {
            this.hobbies = myHobbies;
        }
    }

    addGrade(hobby: string) {
        this.hobbies.push(hobby);
        this._dataService.setData('hobbies', this.hobbies);
    }
}