import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileConfigPage } from '../profile-config/profile-config';
import { ContactusPage } from '../contactus/contactus';
import { Modal, ModalController, ModalOptions } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  ProfileConfig() {
    this.navCtrl.push(ProfileConfigPage);
  }
  ContactUs() {
    this.navCtrl.push(ContactusPage);
  }
}
