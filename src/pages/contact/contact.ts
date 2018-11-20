import { Component } from '@angular/core';
import { NavController, Config  } from 'ionic-angular';
import { ProfileConfigPage } from '../profile-config/profile-config';
import { ContactusPage } from '../contactus/contactus';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public config: Config) {

  }
  ProfileConfig() {
    this.navCtrl.push(ProfileConfigPage);
  }
  ContactUs() {
    this.navCtrl.push(ContactusPage);
  }

  signoutButton() {
    //TODO remove user in local storage
    this.config.set('tabsHideOnSubPages', false)
    this.navCtrl.push(WelcomePage);
  }
}
