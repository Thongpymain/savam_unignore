import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/umd/navigation/url-serializer';
// import {Md5} from 'ts-md5/dist/md5';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  savamAppURL = "http://savamapp.com/API/";
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  getRegisterData() {
    if (typeof this.username !== 'undefined') {
      var usernameAPIUrl = this.savamAppURL + "SearchUser/" + this.username;
      return new Promise(resolve => {
        this.http.get(usernameAPIUrl).subscribe(isUsernameAlreadyExits => {

          if (isUsernameAlreadyExits == 0) {
            //TODO
            alert("Username is already exits");
          } else {
            if (typeof this.email !== 'undefined') {
              var emailAPIUrl = this.savamAppURL + "CheckEmail/" + this.email;
              this.http.get(emailAPIUrl).subscribe(isEmailAlreadyExits => {
                if (isEmailAlreadyExits == 0) {
                  //TODO
                  alert("Email is already exits");
                } else {
                  if ((typeof this.password !== 'undefined') && (typeof this.confirmPassword !== 'undefined')) {
                    if (this.password == this.confirmPassword) {
                      var addUserAPIUrl = this.savamAppURL + "AddUser/" + this.username + "/" + this.password + "/null/" + this.email + "/null/2000-01-01";
                      this.http.get(addUserAPIUrl).subscribe(isInsertUserSuccess => {
                        if (isInsertUserSuccess == 1) {
                          //TODO
                          alert("Insert Success");
                        } else {
                          alert("Insert Not Success");
                        }
                      }, err => {
                        console.log(err);
                      });
                    } else {
                      //TODO
                      alert("Password not equal");
                    }
                  }
                }
              }, err => {
                console.log(err);
              });

            }
          }

        }, err => {
          console.log(err);
        });
      });
    }
  }
}
