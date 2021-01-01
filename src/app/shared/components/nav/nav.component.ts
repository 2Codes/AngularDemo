import {Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'navbar', //this defines your component tag,
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

    hobbies: string[] = [];
    constructor(private _dataService : DataService) {}
    ngOnInit() {}
}