import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categoryDataLists: any;
  categoryDataListsWithArray: any;
  restaurantDataLists: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    var menuCategoryApiUrl = "http://savamapp.com/API/ListCategory";
    var menuCategoryLists = [];
    this.categoryDataListsWithArray = [];
    this.http.get(menuCategoryApiUrl).subscribe(data => {
      this.categoryDataLists = data;
      this.categoryDataLists = this.categoryDataLists.data;
      for(var i=0; i < this.categoryDataLists.length; i++) {
        menuCategoryLists.push(this.categoryDataLists[i]);

        if(menuCategoryLists.length == 2){
          this.categoryDataListsWithArray.push(menuCategoryLists);
          menuCategoryLists = [];
        } 
        if (i == this.categoryDataLists.length - 1 ){
            if(this.categoryDataLists.length % 2 == 1) {
              var array = [];
              menuCategoryLists.push(array);
            }
            this.categoryDataListsWithArray.push(menuCategoryLists);
            menuCategoryLists = [];
        }
      }
    });

    this.getResterantDataLists();
  }

  getResterantDataLists() {
    var resterantDatApiUrl = "http://savamapp.com/API/ListRestaurant";
    this.http.get(resterantDatApiUrl).subscribe(data => {
      this.restaurantDataLists = data;
      this.restaurantDataLists = this.restaurantDataLists.data;
    });
  }

  search(){
    this.navCtrl.push(SearchPage);
  }

}
