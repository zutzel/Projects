import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from '@ionic/storage';
import {NavController, NavParams} from "@ionic/angular";

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.page.html',
    styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
    public name: any = [];

    constructor(private router: Router,
                private storage: Storage,
                public navCtrl: NavController) {
    }

    ngOnInit() {
    }

    Home() {
        console.log(this.name);
        this.storage.set(`name`, this.name);


        this.navCtrl.navigateForward('home', this.name);
    }
}
