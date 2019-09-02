import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePage} from './home/home.page'
import {HomePageModule} from "./home/home.module";
import {LogInPage} from "./log-in/log-in.page";
import {LogInPageModule} from "./log-in/log-in.module";

@NgModule({
    declarations: [AppComponent,
        LogInPage,
        HomePage],
    entryComponents: [LogInPage,
        HomePage],
    imports: [
        BrowserModule,
        HttpClientModule,
        LogInPageModule,
        HomePageModule,
        IonicModule.forRoot(),
        AppRoutingModule],
    providers: [
        LogInPageModule,
        HomePageModule,
        StatusBar,
        HttpClientModule,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
