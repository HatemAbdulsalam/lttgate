import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';      

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AcssessDataService } from './services/acssess-data.service';
 import { FormsModule } from '@angular/forms';
import { AuthService } from './services/AuthService.service';
import { ErrorInterceptorProvidor } from './services/error.interceptor';
import { AuthGuard } from './guards/auth.guard';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ContactserviceService } from './services/Contactservice.service';
import { ContactResolver } from './resolvers/ContactResolver';
import { VactionResolver } from './resolvers/VactionResolver';
import { VacationService } from './services/Vacation.service';
import { AdvertService } from './services/Advert.service';
import { AdvertResolver } from './resolvers/AdvertResolver';
import { DatePipe } from '@angular/common';
import { AcssessResolver } from './resolvers/AcssessResolver';
import { AcssessService } from './services/Acssess.service';
import { HomeResolver } from './resolvers/HomeResolver';
import { LogDataVactionResolver } from './resolvers/LogDataVactionResolver';
import { LogDataVactionService } from './services/LogDataVaction.service';
import { LogDataEFVactionResolver } from './resolvers/LogDataEFVactionResolver';
import { Network } from '@ionic-native/network/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { CardService } from './services/Card.service';
import { CardResolver } from './resolvers/CardResolver';

 
 
 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    AcssessDataService,
    AuthService,
    AuthGuard,
    ErrorInterceptorProvidor,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    SMS,
    ContactserviceService,
    ContactResolver,
    VacationService,
    VactionResolver,
    AdvertResolver,
    AdvertService,
    AcssessResolver,
    AcssessService,
    CardService,
    CardResolver,
    HomeResolver,
    LogDataVactionResolver,
    LogDataVactionService,
    LogDataEFVactionResolver,
    [DatePipe],
    Network,
    AppVersion
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
