webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_email_verify_email__ = __webpack_require__(102);
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
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\forgot-password\forgot-password.html"*/'<!--\n\n  Generated template for the ForgotPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>forgot-password</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <img src="assets/imgs/00-Log in/forgot password-01.png"\n\n    style="margin: auto; margin-top: 30px; margin-bottom: 20px;">\n\n  </ion-row>\n\n  <ion-row><div class="forgot-txt">ลืมรหัสผ่าน</div></ion-row>\n\n  <ion-row><div class="details">กรอกอีเมลของคุณ เราจะส่งรหัสผ่านใหม่ไปยังอีเมลของคุณ</div></ion-row>\n\n  <ion-row>\n\n    <ion-input placeholder="อีเมล"></ion-input>\n\n  </ion-row>\n\n  <ion-row>\n\n    <button class="send-email" (click)="send()">ส่งไปยังอีเมล</button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 102:
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
            selector: 'page-verify-email',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\verify-email\verify-email.html"*/'<!--\n\n  Generated template for the VerifyEmailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>verify-email</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <img src="assets/imgs/00-Log in/send-mail.png"\n\n    style="margin: auto; margin-bottom: 30px;">\n\n  </ion-row>\n\n  <ion-row><div class="head-txt">ส่งไปยังอีเมลของคุณแล้ว</div></ion-row>\n\n  <ion-row><div class="details-txt">เราได้ส่งรหัสผ่านไปยังอีเมลของคุณแล้ว<br>กรุณาตรวจสอบอีเมล</div></ion-row>\n\n  <ion-row>\n\n    <button class="ok-btn">ตกลง</button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\verify-email\verify-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VerifyEmailPage);
    return VerifyEmailPage;
}());

//# sourceMappingURL=verify-email.js.map

/***/ }),

/***/ 103:
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
            selector: 'page-contactus',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ติดต่อเรา</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="head-text">SAVAM</div>\n\n    <ul>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <img src="assets/imgs/04-Profile/address.png">\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>ที่อยู่</p>\n\n            <label>บริษัท ฟู้ด (ประเทศไทย) จำกัด</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <img src="assets/imgs/04-Profile/mobile2.png">\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>โทรศัพท์</p>\n\n            <label>(02) 123-4567</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <img src="assets/imgs/04-Profile/fax.png">\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>โทรสาร</p>\n\n            <label>(02) 123-4567</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n      <li>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <img src="assets/imgs/04-Profile/Icon-Mail.png">\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            <p>อีเมล</p>\n\n            <label>info@findfood.com</label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </li><hr>\n\n    </ul>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 104:
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
            selector: 'page-news',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\news\news.html"*/'<!--\n\n  Generated template for the NewsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title style="background: #fff; color: #F26618;">ข่าวสาร</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content>\n\n  <div class="head-text">ข่าวสาร</div><hr>\n\n  <ion-row>\n\n    <div class="new-shop">ร้านมาใหม่</div>\n\n  </ion-row>\n\n  <ion-row>\n\n    <div class="head-text-news">House Of Eden คาเฟ่สีชมพูสะดุดตา เปิดใหม่บนชั้น 2 CentralWorld</div>\n\n  </ion-row>\n\n  <ion-row>\n\n    <img src="assets/imgs/03-News/pic-news3.png" style="margin: auto; margin-top: 10px;">\n\n  </ion-row>\n\n  <ion-row>\n\n    <p>เรียกความตื่นเต้นจากเหล่าสาว ๆ สาย Cafe Hopping ได้ดีกันอีกครั้งกับ \n\n      House Of Eden คาเฟ่เปิดใหม่บนชั้น 2 ของโครงการ Go...</p>\n\n  </ion-row><hr>\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <img src="assets/imgs/03-News/pic-news1.png">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <h1>Lhong Tou Cafe คาเฟ่เล็ก ๆ แต่อัดแน่นไปด้วยเมนูคุณภาพ</h1>\n\n      <p>นอกจากเยาวราชจะเป็นย่านที่ทุกคนนึกถึงอาหารสตรีทฟู้ดแล้ว ที่นี่ยังมีคาเ…</p>\n\n    </ion-col>\n\n  </ion-row><hr>\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <img src="assets/imgs/03-News/pic-news1.png">\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <h1>Lhong Tou Cafe คาเฟ่เล็ก ๆ แต่อัดแน่นไปด้วยเมนูคุณภาพ</h1>\n\n      <p>นอกจากเยาวราชจะเป็นย่านที่ทุกคนนึกถึงอาหารสตรีทฟู้ดแล้ว ที่นี่ยังมีคาเ…</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 105:
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
    };
    ProfileConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-config',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\profile-config\profile-config.html"*/'<!--\n\n  Generated template for the ProfileConfigPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ตั้งค่าโปรไฟล์</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n    <ion-row>\n\n      <ion-col col-6 text-right>\n\n        <img src="assets/imgs/04-Profile/20150723170640.png"\n\n        style="margin: auto; margin-top: 40px; margin-bottom: 35px; margin-right: -40px;">\n\n      </ion-col>\n\n      <ion-col col-6 text-left>\n\n        <ion-icon name="camera" class="camera"></ion-icon>\n\n      </ion-col>   \n\n    </ion-row>\n\n    <ion-row>\n\n      <ul>\n\n        <li>        \n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center><img src="assets/imgs/04-Profile/profile user.png"></ion-col>\n\n              <ion-col col-5 text-left>ชื่อผู้ใช้</ion-col>\n\n              <ion-col col-5 text-right><p>lanKittichai</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center><img src="assets/imgs/04-Profile/Icon-Mail.png"></ion-col>\n\n              <ion-col col-2 text-left>อีเมล</ion-col>\n\n              <ion-col col-8 text-right><p>lanKittichai@gmail.com</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center><img src="assets/imgs/04-Profile/3F.png"></ion-col>\n\n              <ion-col col-5 text-left>เปลี่ยนรหัสผ่าน</ion-col>\n\n              <ion-col col-5 text-right></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li>\n\n      </ul>\n\n    </ion-row>\n\n  </div>\n\n  <div class="card" style="margin-top: 15px;">\n\n    <ion-row>\n\n      <ul>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center><img src="assets/imgs/04-Profile/mobile2.png"></ion-col>\n\n              <ion-col col-5 text-left>เบอร์โทรศัพท์</ion-col>\n\n              <ion-col col-5 text-right><p>081 234 5678</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li><hr>\n\n        <li>\n\n          <button class="btn-setting">\n\n            <ion-row>\n\n              <ion-col col-1 text-center><img src="assets/imgs/04-Profile/gift.png"></ion-col>\n\n              <ion-col col-5 text-left>วัดเกิด</ion-col>\n\n              <ion-col col-5 text-right><p>01-01-1972</p></ion-col>\n\n              <ion-col col-1 text-center><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n            </ion-row>\n\n          </button>\n\n        </li>\n\n      </ul>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\profile-config\profile-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfileConfigPage);
    return ProfileConfigPage;
}());

//# sourceMappingURL=profile-config.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(51);
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
    function SigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\signin\signin.html"*/'<!--\n\n  Generated template for the SigninPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>signin</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row text-left><div class="head-txt">ลงชื่อเข้าใช้</div></ion-row>\n\n  <ion-row><ion-input placeholder="อีเมล"></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="รหัสผ่าน"></ion-input></ion-row>\n\n  <ion-row>\n\n    <ion-col col-6 text-left>\n\n      <button class="link" (click)="signup()">สร้างบัญชีผู้ใช้</button>\n\n    </ion-col>\n\n    <ion-col col-6 text-right>\n\n        <button class="link" (click)="forgot()">ลืมรหัสผ่าน?</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row><button class="signin-btn">ลงชื่อเข้าใช้</button></ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(51);
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
            selector: 'page-welcome',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>welcome</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row><div class="welcome-txt">Welcome to</div></ion-row>\n\n  <ion-row><div class="savam-txt">Savam</div></ion-row>\n\n  <ion-row>\n\n    <div class="img-welcome">\n\n      <img src="assets/imgs/00-Log in/Group 2.png">\n\n    </div>\n\n  </ion-row>\n\n  <ion-row><button class="signin-btn" (click)="signin()">ลงชื่อเข้าใช้</button></ion-row>\n\n  <ion-row><button class="signup-btn" (click)="signup()">สร้างบัญชีผู้ใช้</button></ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		281,
		9
	],
	"../pages/forgot-password/forgot-password.module": [
		280,
		8
	],
	"../pages/news-datails/news-datails.module": [
		282,
		0
	],
	"../pages/news/news.module": [
		283,
		7
	],
	"../pages/profile-config/profile-config.module": [
		284,
		6
	],
	"../pages/search/search.module": [
		285,
		5
	],
	"../pages/signin/signin.module": [
		286,
		4
	],
	"../pages/signup/signup.module": [
		287,
		3
	],
	"../pages/verify-email/verify-email.module": [
		288,
		2
	],
	"../pages/welcome/welcome.module": [
		289,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
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
            selector: 'page-about',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_config_profile_config__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__ = __webpack_require__(103);
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
    function ContactPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ContactPage.prototype.ProfileConfig = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_config_profile_config__["a" /* ProfileConfigPage */]);
    };
    ContactPage.prototype.ContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contactus_contactus__["a" /* ContactusPage */]);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>โปรไฟล์</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n  <ion-row>\n\n    <img src="assets/imgs/04-Profile/20150723170640.png"\n\n    style="margin: auto; margin-top: 40px; margin-bottom: 35px;">\n\n  </ion-row>\n\n  <ion-row>\n\n    <ul>\n\n      <li>        \n\n        <button class="btn-setting" (click)="ProfileConfig()">\n\n          <img src="assets/imgs/04-Profile/Settings-2.png">ตั้งค่าโปรไฟล์ของฉัน\n\n          <ion-icon name="arrow-forward" style="float: right;"></ion-icon></button>\n\n      </li><hr>\n\n      <li>\n\n        <button class="btn-setting">\n\n          <img src="assets/imgs/04-Profile/Notification.png">การแจ้งเตือน\n\n          <ion-toggle checked="false" style="float: right;"></ion-toggle></button>\n\n      </li><hr>\n\n      <li>\n\n        <button class="btn-setting" (click)="ContactUs()">\n\n          <img src="assets/imgs/04-Profile/mobile.png">ติดต่อเรา\n\n          <ion-icon name="arrow-forward" style="float: right;"></ion-icon></button>\n\n      </li><hr>\n\n    </ul>\n\n  </ion-row>\n\n  </div>\n\n  <ion-row style="margin-top: 40px;">\n\n    <button class="btn-signout">ออกจากระบบ</button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(50);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Savam</ion-title>\n\n  </ion-navbar>\n\n  <div class="bg-search">\n\n    <ion-item style="border-radius: 7px;">        \n\n      <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n      <ion-input type="text" class="searchTab" placeholder="ค้นหาร้านอาหาร" (click)="search()"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-app">\n\n  <div class="card">\n\n    <ion-row style="padding-top: 20px;">\n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/01-sushi.png">\n\n          <p>อาหารญี่ปุ่น</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/01-sushi.png">\n\n          <p>อาหารจีน</p>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/02-fried-rice.png">\n\n          <p>ตามสั่ง</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/02-fried-rice.png">\n\n          <p>ตามสั่ง</p>\n\n        </button>\n\n      </ion-col>    \n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/03-salmon.png"style="min-height: 32px;">\n\n          <p>สเต็ก</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/03-salmon.png"style="min-height: 32px;">\n\n          <p>สเต็ก</p>\n\n        </button>\n\n      </ion-col>    \n\n      <ion-col col-3>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/04-hamburger.png">\n\n          <p>ฟาสฟู๊ด</p>\n\n        </button>\n\n        <button class="btn-home">\n\n          <img src="assets/imgs/01-Home/04-hamburger.png">\n\n          <p>ฟาสฟู๊ด</p>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="card" style="margin-top: 20px; padding-bottom: 10px;">\n\n    <ion-row style="margin-bottom: 10px;">\n\n      <ion-col col-8>\n\n        <div class="head-text">ร้านอาหารติดอันดับ</div>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <div class="view-text">ดูทั้งหมด</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-slides slidesPerView="2.2" spaceBetween="1"> \n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951-2.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951.png" style="width: 95%;">\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <img src="assets/imgs/01-Home/pexels-photo-675951-2.png" style="width: 95%;">\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_verify_email_verify_email__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_config_profile_config__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(201);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-datails/news-datails.module#NewsDatailsPageModule', name: 'NewsDatailsPage', segment: 'news-datails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-config/profile-config.module#ProfileConfigPageModule', name: 'ProfileConfigPage', segment: 'profile-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify-email/verify-email.module#VerifyEmailPageModule', name: 'VerifyEmailPage', segment: 'verify-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(107);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(50);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <!-- <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab> -->\n\n  <ion-tab [root]="tab4Root" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="paper"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <div>\n\n      <ion-row style="margin-top: 10px;">\n\n        <ion-col col-6 text-left>\n\n          <button class="top-btn">Cancle</button>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <button class="top-btn">Search</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div class="bg-search">\n\n      <ion-item style="border-radius: 7px;">        \n\n        <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n        <ion-input type="text" class="searchTab" placeholder="ค้นหาร้านอาหาร"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="bg-search">\n\n      <ion-item style="border-radius: 7px;">        \n\n        <ion-label><ion-icon name="search"></ion-icon></ion-label>\n\n        <ion-input type="text" class="searchTab" placeholder="ค้นหาสถานที่"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-app">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\PymainPJ\savam_mobile_app\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <!-- <ion-title>signup</ion-title> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row text-left><div class="head-txt">สร้างบัญชีผู้ใช้</div></ion-row>\n\n  <ion-row style="margin-bottom: 15px;">\n\n    <ion-col col-6 text-right>\n\n      <img src="assets/imgs/00-Log in/user.png"\n\n      style="margin-right: -40px;">\n\n    </ion-col>\n\n    <ion-col col-6 text-left>\n\n      <img src="assets/imgs/00-Log in/uppic.png"\n\n      style="margin-top: 65px;">\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row><ion-input placeholder="ชื่อผู้ใช้"></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="อีเมล"></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="รหัสผ่าน"></ion-input></ion-row>\n\n  <ion-row><ion-input placeholder="ยืนยันรหัสผ่าน"></ion-input></ion-row>\n\n  <ion-row><button class="signup-btn">สร้างบัญชีผู้ใช้</button></ion-row>\n\n  <ion-row text-center>\n\n    <label class="condition">By signing up, you agree to the <a>Savam Terms of Service</a> and <a>Privacy Policy</a></label>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\PymainPJ\savam_mobile_app\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map