import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  forgot() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  loginButton() {
    if (typeof this.email !== 'undefined' && typeof this.password !== 'undefined') {
      var loginApiUrl = "http://savamapp.com/API/LoginCheck/" + this.email + "/" + this.password;
      return new Promise(resolve => {
        this.http.get(loginApiUrl).subscribe(isLoginSuccess => {
          if (isLoginSuccess == 0) {
            alert("Email or password invalid");
          } else {
            alert("login success");
          }
        }, err => {
          console.log(err);
        });
      });
    }
  }
}
