import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePage } from '../pages/create/create';
import { HistoryPage } from '../pages/history/history';

import { MeetingService } from '../services/meeting';
import { AttendanceService } from '../services/attendance';
import { UtilityService } from '../services/utilities';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { HTTP } from '@ionic-native/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    HistoryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(
      {
        name: '__attendance_tracker_db',
        driverOrder: ['sqlite', 'indexeddb', 'websql']
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    HistoryPage,
    TabsPage
  ],
  providers: [
    HTTP,
    File,
    UtilityService,
    EmailComposer,
    MeetingService,
    AttendanceService,
    StatusBar,
    BarcodeScanner,
    Base64ToGallery,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
