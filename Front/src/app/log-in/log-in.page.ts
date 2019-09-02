import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HomePage} from '../home/home.page';
import {NavController, NavParams} from "@ionic/angular";


@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.page.html',
    styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
    public name: any = [];

    constructor(private router: Router,
                public navCtrl: NavController,
                public navParams:NavParams) {
    }

    ngOnInit() {
    }

    Home() {
        console.log(this.name);
        // this.navCtrl.navigateForward('home', this.name);
    }

    handleNameValue(name) {
        //console.log(name);
        name = {xuxu: `asda`};
        this.name = name;
    }

}
