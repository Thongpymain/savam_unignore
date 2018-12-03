import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfileConfigPage } from '../profile-config/profile-config';
import { Webservices } from '../Controller/webservices';

/**
 * Generated class for the EditBirthdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-birthdate',
  templateUrl: 'edit-birthdate.html',
})
export class EditBirthdatePage {
  brithdate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public webservices:Webservices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBirthdatePage');
  }

  saveButton(){
    this.storage.set("birthDate", this.brithdate);
    this.webservices.updateUserInformation();
    this.navCtrl.push(ProfileConfigPage);
  }
}
