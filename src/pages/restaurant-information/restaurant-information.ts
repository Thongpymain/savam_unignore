import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SearchPage } from '../search/search';


/**
 * Generated class for the RestaurantInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-restaurant-information',
  templateUrl: 'restaurant-information.html',
})
export class RestaurantInformationPage {
  
  @ViewChild('map') mapElement: ElementRef;
  restaurant_name: any;
  lat: any;
  lng: any;
  map: any;
  district_name: any;
  telephone : any;
  pic_url : any;
  open_time: any;
  close_time: any;
  openTime:any
  restaurant_latitude:any;
  restaurant_longitude:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController) {
    this.restaurant_name = navParams.get('restaurant_name');
    this.district_name = navParams.get('district_name');
    this.telephone = navParams.get('telephone');
    this.pic_url = navParams.get('pic_url');
    this.open_time = navParams.get('open_time');
    this.close_time = navParams.get('close_time');
    this.openTime = "เปิด " + this.open_time + " - " + this.close_time;
    this.restaurant_latitude = navParams.get('restaurant_latitude');
    this.restaurant_longitude = navParams.get('restaurant_longitude');
  }

  backButton() {
     this.navCtrl.setRoot(SearchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantInformationPage');
    this.loadMap();
  }

  loadMap() {


    let latLng = new google.maps.LatLng(this.restaurant_latitude, this.restaurant_longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //TODO Add current position with blue marker
    this.addMarker(this.restaurant_latitude, this.restaurant_longitude);
  }

  addMarker(latitude, longitude) {
    var marker;

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: this.map
      });
  }
}
