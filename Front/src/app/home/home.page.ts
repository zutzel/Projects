import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../services/http.service';
import {NavController, NavParams} from "@ionic/angular";

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
        public navCtrl:NavController,
        public router: Router) {
        // this.Name = navParams.data
    }

    async ionViewDidEnter() {
      console.log(this.Name);
    }

    async reloadInvoices() {
        // this.invoices = await this.httpService.get(`${this.environment}/v1/invoices`);
        const message = 'Invoices reloaded';
    }

    name() {
        this.result.Name = this.Name;
    }

    async date() {
        this.result.Date = await this.httpService.get(`${this.environment}/DATE`);
    }

    async hour() {
        this.result.Hour = await this.httpService.get(`${this.environment}/HOUR`);
    }

    quit() {
        localStorage.clear();
        this.router.navigateByUrl('log-in');
    }
}
