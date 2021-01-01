import {Component, OnInit} from '@angular/core';
import { HomeService } from './home.service';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-home', //this defines your component tag,
    providers: [HomeService], //add provider if you have a service
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    name: string = '';
    grade: string = 'not available';
    hobbies: string[] = [];
    constructor(private _homeService: HomeService, private _dataService: DataService) {
            this.name = _homeService.getName();
        }
    ngOnInit() {
        this.hobbies = this._dataService.getData("hobbies");
    }
}