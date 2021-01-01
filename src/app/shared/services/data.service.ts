import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    data: any = {};

    getData(key: string) {
        return this.data[key];
    }
    setData(key: string, data: any) {
        this.data[key] = data;
    }
}