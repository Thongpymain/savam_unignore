import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { VerifyEmailPage } from '../pages/verify-email/verify-email';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfileConfigPage } from '../pages/profile-config/profile-config';
import { ContactusPage } from '../pages/contactus/contactus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsPage,
    SearchPage,
    TabsPage,
    ProfileConfigPage,
    ContactusPage,
    WelcomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    VerifyEmailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages : true}),
    IonicStorageModule.forRoot({
      name: 'savamLocalDB',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsPage,
    SearchPage,
    TabsPage,
    ProfileConfigPage,
    ContactusPage,
    WelcomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
    VerifyEmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Geolocation,
    ImagePicker,
    Base64,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
