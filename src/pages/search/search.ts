import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  lat: any;
  lng: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.loadMap();
  }

  loadMap() {

    if (this.platform.is('core')) {
      this.lat = -34.9290;
      this.lng = 138.6010;
    } else if (this.platform.is('android')) {
      //TODO : fixed Geolocation is slower load
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });

      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
    }

    let latLng = new google.maps.LatLng(18.8080992, 98.9773775);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarker();

  }

  addMarker(){
    let testlatLng = new google.maps.LatLng(18.809512, 98.980589);
    let testlatLng2 = new google.maps.LatLng(18.807985, 98.973513);
 
    var locations = [
      ['Cronulla Beach', 18.8080992, 98.9773775],
      ['Manly Beach', 18.807985, 98.973513],
      ['Maroubra Beach', 18.809512, 98.980589]
    ];
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map
      });
    
      let content =  this.createContentMarker(locations[i][0]);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(content);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }

  createContentMarker(name){
    let distance = "0,4 km";
    let city = "ทองหล่อ";

    let content = 
    "<div>"+
    "<div>"+
                        "<img src=\"assets/imgs/03-News/pic-news3.png\" class=\"contentMarkerImage\">"+
                   "</div>"+
                  "<div class=\"contentTextMarker\">"
                         +name+
                  "</div>"+
                  "<div style=\"display:table;width: 100%;\">"+
                  "<ion-icon name=\"pin\" class=\"contentTableMarker\"></ion-icon>"+
                  "<div class=\"contentTableMarker\">" + city + "</div>" +  
                  "<div class=\"contentTableMarker\">" + distance + "</div>" +  
                  "</div>"+
                  "<div class=\"buttonInMarker\">"+
                  "<button class=\"button\" onclick=\"goButtonClick()\">ดูต่อ</button>"+
                  "</div>"+
                  "</div>"; 
    return content;
  }
  goButtonClick() {
    console.log('11111111111111111');
  }
}
