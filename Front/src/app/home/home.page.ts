import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import {NavParams} from "@ionic/angular";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public result: any = [];
    public environment: string = `http://localhost:3000`;
    @Input() Name: string;


    constructor(
        public httpService: HttpService,
        private storage: Storage,
        public router: Router) {
        // this.Name = navParams.data
    }

    name() {
        this.storage.get('name').then((res) => {
            this.result.Name = res;
        });
        this.storage.clear().then(r=>{})
    }
    async time() {
        this.result.Time = await this.httpService.get(`${this.environment}/TIME`);
    }

    async date() {
        this.result.Date = await this.httpService.get(`${this.environment}/DATE`);
    }

    async hour() {
        this.result.Hour = await this.httpService.get(`${this.environment}/HOUR`);
    }

    quit() {
        this.result=[];
        this.router.navigateByUrl('log-in');
    }
}
