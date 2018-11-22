webpackJsonp([10],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ติดต่อเรา</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="head-text">SAVAM</div>\n\n    <ul>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <div class="icon-img"><img src="assets/imgs/04-Profile/address.png"></div>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>ที่อยู่</p>\n\n            <label>บริษัท ฟู้ด (ประเทศไทย) จำกัด</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <div class="icon-img"><img src="assets/imgs/04-Profile/mobile2.png"></div>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>โทรศัพท์</p>\n\n            <label>(02) 123-4567</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <div class="icon-img"><img src="assets/imgs/04-Profile/fax.png"></div>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>โทรสาร</p>\n\n            <label>(02) 123-4567</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <div class="icon-img"><img src="assets/imgs/04-Profile/Icon-Mail.png"></div>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>อีเมล</p>\n\n            <label>info@findfood.com</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n    </ul>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_email_verify_email__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.send = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verify_email_verify_email__["a" /* VerifyEmailPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\forgot-password\forgot-password.html"*/'<!--\n\n  Generated template for the ForgotPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>forgot-password</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <img src="assets/imgs/00-Log in/forgot password-01.png"\n\n    style="margin: auto; margin-top: 30px; margin-bottom: 20px;">\n\n  </ion-row>\n\n  <ion-row><div class="forgot-txt">ลืมรหัสผ่าน</div></ion-row>\n\n  <ion-row><div class="details">กรอกอีเมลของคุณ เราจะส่งรหัสผ่านใหม่ไปยังอีเมลของคุณ</div></ion-row>\n\n  <ion-row>\n\n    <ion-input placeholder="อีเมล"></ion-input>\n\n  </ion-row>\n\n  <ion-row>\n\n    <button class="send-email" (click)="send()">ส่งไปยังอีเมล</button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VerifyEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyEmailPage = /** @class */ (function () {
    function VerifyEmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VerifyEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyEmailPage');
    };
    VerifyEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify-email',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\verify-email\verify-email.html"*/'<!--\n\n  Generated template for the VerifyEmailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>verify-email</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <img src="assets/imgs/00-Log in/send-mail.png"\n\n    style="margin: auto; margin-bottom: 30px;">\n\n  </ion-row>\n\n  <ion-row><div class="head-txt">ส่งไปยังอีเมลของคุณแล้ว</div></ion-row>\n\n  <ion-row><div class="details-txt">เราได้ส่งรหัสผ่านไปยังอีเมลของคุณแล้ว<br>กรุณาตรวจสอบอีเมล</div></ion-row>\n\n  <ion-row>\n\n    <button class="ok-btn">ตกลง</button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\verify-email\verify-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VerifyEmailPage);
    return VerifyEmailPage;
}());

//# sourceMappingURL=verify-email.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfileConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileConfigPage = /** @class */ (function () {
    function ProfileConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfileConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileConfigPage');
        // http://savamapp.com/API/UserDetail/{str_username}
    };
    ProfileConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-config',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\profile-config\profile-config.html"*/'<!--\n\n  Generated template for the ProfileConfigPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ตั้งค่าโปรไฟล์</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n    <ion-row>\n\n      <ion-col col-6 text-right>\n\n        <div class="profile-img">\n\n          <img src="assets/imgs/04-Profile/20150723170640.png">\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6 text-left>\n\n        <ion-icon name="camera" class="camera"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ul>\n\n        <li>        \n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center>\n\n                <div class="icon-img"><img src="assets/imgs/04-Profile/profile user.png"></div>\n\n              </ion-col>\n\n              <ion-col col-5 text-left><h1>ชื่อผู้ใช้</h1></ion-col>\n\n              <ion-col col-5 text-right><p>lanKittichai</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center>\n\n                <div class="icon-img"><img src="assets/imgs/04-Profile/Icon-Mail.png"></div>\n\n              </ion-col>\n\n              <ion-col col-2 text-left><h1>อีเมล</h1></ion-col>\n\n              <ion-col col-8 text-right><p>lanKittichai@gmail.com</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center>\n\n                <div class="icon-img"><img src="assets/imgs/04-Profile/3F.png"></div>\n\n              </ion-col>\n\n              <ion-col col-5 text-left><h1>เปลี่ยนรหัสผ่าน</h1></ion-col>\n\n              <ion-col col-5 text-right></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li>\n\n      </ul>\n\n    </ion-row>\n\n  </div>\n\n  <div class="card" style="margin-top: 15px;">\n\n    <ion-row>\n\n      <ul>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center>\n\n                <div class="icon-img"><img src="assets/imgs/04-Profile/mobile2.png"></div>\n\n              </ion-col>\n\n              <ion-col col-5 text-left><h1>เบอร์โทรศัพท์</h1></ion-col>\n\n              <ion-col col-5 text-right><p>081 234 5678</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center>\n\n                <div class="icon-img"><img src="assets/imgs/04-Profile/gift.png"></div>\n\n              </ion-col>\n\n              <ion-col col-5 text-left><h1>วัดเกิด</h1></ion-col>\n\n              <ion-col col-5 text-right><p>01-01-1972</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li>\n\n      </ul>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\profile-config\profile-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfileConfigPage);
    return ProfileConfigPage;
}());

//# sourceMappingURL=profile-config.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\news\news.html"*/'<!--\n\n  Generated template for the NewsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title style="background: #fff; color: #F26618;">ข่าวสาร</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content>\n\n  <div class="head-text">ข่าวสาร</div><hr>\n\n  <ion-row>\n\n    <div class="new-shop">ร้านมาใหม่</div>\n\n  </ion-row>\n\n  <ion-row>\n\n    <div class="head-text-news">House Of Eden คาเฟ่สีชมพูสะดุดตา เปิดใหม่บนชั้น 2 CentralWorld</div>\n\n  </ion-row>\n\n  <ion-row class="first-news">\n\n    <img src="assets/imgs/03-News/pic-news3.png">\n\n  </ion-row>\n\n  <ion-row class="text-first-news">\n\n    <p>เรียกความตื่นเต้นจากเหล่าสาว ๆ สาย Cafe Hopping ได้ดีกันอีกครั้งกับ \n\n      House Of Eden คาเฟ่เปิดใหม่บนชั้น 2 ของโครงการ Go...</p>\n\n  </ion-row><hr>\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <div class="news-details">\n\n        <img src="assets/imgs/03-News/pic-news1.png">\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <h1>Lhong Tou Cafe คาเฟ่เล็ก ๆ แต่อัดแน่นไปด้วยเมนูคุณภาพ</h1>\n\n      <p>นอกจากเยาวราชจะเป็นย่านที่ทุกคนนึกถึงอาหารสตรีทฟู้ดแล้ว ที่นี่ยังมีคาเ…</p>\n\n    </ion-col>\n\n  </ion-row><hr>\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <div class="news-details">\n\n        <img src="assets/imgs/03-News/pic-news1.png">\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <h1>Lhong Tou Cafe คาเฟ่เล็ก ๆ แต่อัดแน่นไปด้วยเมนูคุณภาพ</h1>\n\n      <p>นอกจากเยาวราชจะเป็นย่านที่ทุกคนนึกถึงอาหารสตรีทฟู้ดแล้ว ที่นี่ยังมีคาเ…</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		291,
		9
	],
	"../pages/forgot-password/forgot-password.module": [
		292,
		8
	],
	"../pages/news-datails/news-datails.module": [
		293,
		0
	],
	"../pages/news/news.module": [
		300,
		7
	],
	"../pages/profile-config/profile-config.module": [
		294,
		6
	],
	"../pages/search/search.module": [
		295,
		5
	],
	"../pages/signin/signin.module": [
		296,
		4
	],
	"../pages/signup/signup.module": [
		297,
		3
	],
	"../pages/verify-email/verify-email.module": [
		298,
		2
	],
	"../pages/welcome/welcome.module": [
		299,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <!-- <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab> -->\n\n  <ion-tab [root]="tab4Root" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="paper"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_config_profile_config__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, modalCtrl, config) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
    }
    ContactPage.prototype.ProfileConfig = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_config_profile_config__["a" /* ProfileConfigPage */]);
    };
    ContactPage.prototype.ContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contactus_contactus__["a" /* ContactusPage */]);
    };
    ContactPage.prototype.signoutButton = function () {
        //TODO remove user in local storage
        this.config.set('tabsHideOnSubPages', false);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>โปรไฟล์</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n  <ion-row class="profile-img">\n\n    <img src="assets/imgs/04-Profile/20150723170640.png">\n\n  </ion-row>\n\n  <ion-row>\n\n    <ul>\n\n      <li>        \n\n        <button class="btn-setting" (click)="ProfileConfig()">\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <div class="icon-img"><img src="assets/imgs/04-Profile/Settings-2.png"></div>\n\n            </ion-col>\n\n            <ion-col col-10 text-left><h1>ตั้งค่าโปรไฟล์ของฉัน</h1></ion-col>\n\n            <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n          </ion-row>\n\n        </button>\n\n      </li><hr>\n\n      <li>\n\n        <button class="btn-setting">\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <div class="icon-img"><img src="assets/imgs/04-Profile/Notification.png"></div>\n\n            </ion-col>\n\n            <ion-col col-10 text-left><h1>การแจ้งเตือน</h1></ion-col>\n\n            <ion-col col-1 text-center>\n\n              <ion-toggle checked="false" style="float: right;"></ion-toggle>\n\n            </ion-col>\n\n          </ion-row>\n\n        </button>\n\n      </li><hr>\n\n      <li>\n\n        <button class="btn-setting" (click)="ContactUs()">\n\n          <ion-row>\n\n            <ion-col col-1 text-center>\n\n              <div class="icon-img"><img src="assets/imgs/04-Profile/mobile.png"></div>\n\n            </ion-col>\n\n            <ion-col col-10 text-left><h1>ติดต่อเรา</h1></ion-col>\n\n            <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n          </ion-row>\n\n        </button>\n\n      </li><hr>\n\n    </ul>\n\n  </ion-row>\n\n  </div>\n\n  <ion-row style="margin-top: 40px; margin-bottom: 40px;">\n\n    <button class="btn-signout" (click)="signoutButton()">ออกจากระบบ</button>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Savam</ion-title>\n\n  </ion-navbar>\n\n  <div class="bg-search">\n\n    <ion-item style="border-radius: 7px;">        \n\n      <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n      <ion-input type="text" placeholder="ค้นหาร้านอาหาร" (click)="search()"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n    <ion-row style="padding-top: 20px;">\n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/01-sushi.png">\n\n          <p>อาหารญี่ปุ่น</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/01-sushi.png">\n\n          <p>อาหารจีน</p>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/02-fried-rice.png">\n\n          <p>ตามสั่ง</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/02-fried-rice.png">\n\n          <p>ตามสั่ง</p>\n\n        </button>\n\n      </ion-col>    \n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/03-salmon.png"style="min-height: 32px;">\n\n          <p>สเต็ก</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/03-salmon.png"style="min-height: 32px;">\n\n          <p>สเต็ก</p>\n\n        </button>\n\n      </ion-col>    \n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/04-hamburger.png">\n\n          <p>ฟาสฟู๊ด</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/04-hamburger.png">\n\n          <p>ฟาสฟู๊ด</p>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="card" style="margin-top: 20px; padding-bottom: 10px;">\n\n    <ion-row style="margin-bottom: 10px;">\n\n      <ion-col col-8>\n\n        <div class="head-text">ร้านอาหารติดอันดับ</div>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <div class="view-text">ดูทั้งหมด</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-slides slidesPerView="2.2" spaceBetween="1"> \n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951-2.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951-2.png" style="width: 95%;">\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_verify_email_verify_email__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_config_profile_config__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_config_profile_config__["a" /* ProfileConfigPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_verify_email_verify_email__["a" /* VerifyEmailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-datails/news-datails.module#NewsDatailsPageModule', name: 'NewsDatailsPage', segment: 'news-datails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-config/profile-config.module#ProfileConfigPageModule', name: 'ProfileConfigPage', segment: 'profile-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-email/verify-email.module#VerifyEmailPageModule', name: 'VerifyEmailPage', segment: 'verify-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'savamLocalDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_config_profile_config__["a" /* ProfileConfigPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__["a" /* ContactusPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_verify_email_verify_email__["a" /* VerifyEmailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        this.loadMap();
    };
    SearchPage.prototype.loadMap = function () {
        var _this = this;
        if (this.platform.is('core')) {
            this.lat = -34.9290;
            this.lng = 138.6010;
        }
        else if (this.platform.is('android')) {
            //TODO : fixed Geolocation is slower load
            this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
            var watch = this.geolocation.watchPosition();
            watch.subscribe(function (data) {
                // data can be a set of coordinates, or an error (if an error occurred).
                _this.lat = data.coords.latitude;
                _this.lng = data.coords.longitude;
            });
        }
        var latLng = new google.maps.LatLng(18.8080992, 98.9773775);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
    SearchPage.prototype.addMarker = function () {
        var testlatLng = new google.maps.LatLng(18.809512, 98.980589);
        var testlatLng2 = new google.maps.LatLng(18.807985, 98.973513);
        var locations = [
            ['Cronulla Beach', 18.8080992, 98.9773775],
            ['Manly Beach', 18.807985, 98.973513],
            ['Maroubra Beach', 18.809512, 98.980589]
        ];
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        var _loop_1 = function () {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: this_1.map
            });
            var content = this_1.createContentMarker(locations[i][0]);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(content);
                    google.maps.event.addListenerOnce(infowindow, 'domready', function () {
                        var goButtonElement = document.getElementById('goButton');
                        var goButtonValue = goButtonElement.value;
                        goButtonElement.addEventListener('click', function () {
                            //TODO
                            alert("Goto " + goButtonValue);
                        });
                    });
                    infowindow.open(this.map, marker);
                };
            })(marker, i));
        };
        var this_1 = this;
        for (i = 0; i < locations.length; i++) {
            _loop_1();
        }
    };
    SearchPage.prototype.createContentMarker = function (name) {
        var distance = "0,4 km";
        var city = "ทองหล่อ";
        var content = "<div>" +
            "<div class=\"info-window\">" +
            "<img src=\"assets/imgs/03-News/pic-news3.png\" class=\"contentMarkerImage\">" +
            "</div>" +
            "<div class=\"contentTextMarker\">"
            + name +
            "</div>" +
            "<div style=\"display:table;width: 100%;\">" +
            "<div style=\"text-align: center;\">" + "<img src=\"assets/icon/mappin.png\" style=\"width: 14px;\">" +
            "<label style=\"margin-right: 10px; margin-left: 3px;\">" + city + "</label>" + "<label>" + distance + "</label>" + "</div>" +
            "</div>" +
            "<div class=\"buttonInMarker\">" +
            "<button id=\"goButton\" class=\"button\" value=\"" + name + "\">ดูต่อ</button>" +
            "</div>" +
            "</div>";
        return content;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SearchPage.prototype, "mapElement", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <div>\n\n      <ion-row style="margin-top: 10px;">\n\n        <ion-col col-6 text-left>\n\n          <button class="top-btn">Cancle</button>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <button class="top-btn">Search</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div class="bg-search">\n\n      <ion-item style="border-radius: 7px;">        \n\n        <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n        <ion-input type="text" class="searchTab" placeholder="ค้นหาร้านอาหาร"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="bg-search">\n\n      <ion-item style="border-radius: 7px;">        \n\n        <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n        <ion-input type="text" class="searchTab" placeholder="ค้นหาสถานที่"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </ion-navbar>\n\n<div>\n\n    <div #map id=\'map\'></div>\n\n</div>\n\n</ion-header>\n\n<ion-content class="bg-app">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.loginButton = function () {
        var _this = this;
        if (typeof this.email !== 'undefined' && typeof this.password !== 'undefined') {
            var loginApiUrl = "http://savamapp.com/API/LoginCheck/" + this.email + "/" + this.password;
            return new Promise(function (resolve) {
                _this.http.get(loginApiUrl).subscribe(function (isLoginSuccess) {
                    if (isLoginSuccess == 0) {
                        alert("Email or password invalid");
                    }
                    else {
                        //Save email and password to local storage
                        _this.storage.set("email", _this.email);
                        _this.storage.set("password", _this.password);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        }
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\signin\signin.html"*/'<!--\n\n  Generated template for the SigninPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>signin</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row text-left><div class="head-txt">ลงชื่อเข้าใช้</div></ion-row>\n\n  <ion-row><ion-input placeholder="อีเมล" [(ngModel)]=\'email\'></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="รหัสผ่าน" type="password" [(ngModel)]=\'password\'></ion-input></ion-row>\n\n  <ion-row>\n\n    <ion-col col-6 text-left>\n\n      <button class="link" (click)="signup()">สร้างบัญชีผู้ใช้</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-right>\n\n        <button class="link" (click)="forgot()">ลืมรหัสผ่าน?</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row><button class="signin-btn" (click)="loginButton()">ลงชื่อเข้าใช้</button></ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {Md5} from 'ts-md5/dist/md5';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.imagePicker = imagePicker;
        this.savamAppURL = "http://savamapp.com/API/";
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.getRegisterData = function () {
        var _this = this;
        if (typeof this.username !== 'undefined') {
            var usernameAPIUrl = this.savamAppURL + "SearchUser/" + this.username;
            return new Promise(function (resolve) {
                _this.http.get(usernameAPIUrl).subscribe(function (isUsernameAlreadyExits) {
                    if (isUsernameAlreadyExits == 0) {
                        //TODO
                        alert("Username is already exits");
                    }
                    else {
                        if (typeof _this.email !== 'undefined') {
                            var emailAPIUrl = _this.savamAppURL + "CheckEmail/" + _this.email;
                            if (_this.validateEmail(_this.email)) {
                                _this.http.get(emailAPIUrl).subscribe(function (isEmailAlreadyExits) {
                                    if (isEmailAlreadyExits == 0) {
                                        //TODO
                                        alert("Email is already exits");
                                    }
                                    else {
                                        if ((typeof _this.password !== 'undefined') && (typeof _this.confirmPassword !== 'undefined')) {
                                            if (_this.password == _this.confirmPassword) {
                                                var addUserAPIUrl = _this.savamAppURL + "AddUser/" + _this.username + "/" + _this.password + "/null/" + _this.email + "/null/2000-01-01";
                                                _this.http.get(addUserAPIUrl).subscribe(function (isInsertUserSuccess) {
                                                    if (isInsertUserSuccess == 1) {
                                                        //TODO
                                                        alert("Register Success");
                                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
                                                    }
                                                    else {
                                                        alert("Register isn't Success");
                                                    }
                                                }, function (err) {
                                                    console.log(err);
                                                });
                                            }
                                            else {
                                                //TODO
                                                alert("Password not equal");
                                            }
                                        }
                                    }
                                }, function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                alert("Email isn't valid");
                            }
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        }
    };
    SignupPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupPage.prototype.getPictures = function () {
        this.imagePicker.getPictures({}).then(function (results) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
            ;
        }, function (err) {
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>signup</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row text-left><div class="head-txt">สร้างบัญชีผู้ใช้</div></ion-row>\n\n  <ion-row style="margin-bottom: 15px;">\n\n    <ion-col col-6 text-right>\n\n      <img src="assets/imgs/00-Log in/user.png"\n\n      style="margin-right: -40px;">\n\n    </ion-col>\n\n    <ion-col col-6 text-left>\n\n      <img src="assets/imgs/00-Log in/uppic.png"\n\n      style="margin-top: 65px;" (click)="getPictures()">\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row><ion-input placeholder="ชื่อผู้ใช้" [(ngModel)]=\'username\'></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="อีเมล" [(ngModel)]=\'email\'></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="รหัสผ่าน" type="password" [(ngModel)]=\'password\'></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="ยืนยันรหัสผ่าน" type="password" [(ngModel)]=\'confirmPassword\'></ion-input></ion-row>\n\n  <ion-row><button class="signup-btn" (click)="getRegisterData()">สร้างบัญชีผู้ใช้</button></ion-row>\n\n  <ion-row text-center>\n\n    <label class="condition">By signing up, you agree to the <a>Savam Terms of Service</a> and <a>Privacy Policy</a></label>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row><div class="welcome-txt">Welcome to</div></ion-row>\n\n  <ion-row><div class="savam-txt">Savam</div></ion-row>\n\n  <ion-row>\n\n    <div class="img-welcome">\n\n      <img src="assets/imgs/00-Log in/Group 2.png">\n\n    </div>\n\n  </ion-row>\n\n  <ion-row><button class="signin-btn" (click)="signin()">ลงชื่อเข้าใช้</button></ion-row>\n\n  <ion-row><button class="signup-btn" (click)="signup()">สร้างบัญชีผู้ใช้</button></ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app_gitignore23\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map