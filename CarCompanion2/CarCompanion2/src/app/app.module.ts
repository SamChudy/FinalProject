import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { BatteryPage } from '../pages/battery/battery';
import { ContactsPage } from '../pages/contacts/contacts';
import { MusicPage } from '../pages/music/music';
import { CalendarPage } from '../pages/calendar/calendar';
import { StepsPage } from '../pages/steps/steps';

import { Contacts } from '@ionic-native/contacts';
import { Camera } from '@ionic-native/camera';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Calendar } from '@ionic-native/calendar';
import { Pedometer } from '@ionic-native/pedometer';
import { Health } from '@ionic-native/health';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    ContactsPage,
    MusicPage,
    BatteryPage,
    CalendarPage,
    StepsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    ContactsPage,
    MusicPage,
    BatteryPage,
    CalendarPage,
    StepsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Camera,
    BatteryStatus,
    Calendar,
    Pedometer,
    Health,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
