webpackJsonp([6],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, storage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.galleryType = 'obituaries';
        this.loggedin = false;
        console.log('home page');
        events.subscribe('user:login', function (data) {
            _this.setLoginData(data);
        });
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user_login').then(function (data) {
            if (data) {
                // do checks here
                _this.loggedin = true;
            }
            else {
                _this.loggedin = false;
            }
        });
    };
    HomePage.prototype.pushPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.openLoginModal = function () {
        this.loginModal = this.modalCtrl.create('LoginModalPage');
        this.loginModal.present();
    };
    HomePage.prototype.setLoginData = function (data) {
        if (data.logout) {
            this.loggedin = false;
        }
        else if (data.success) {
            this.loggedin = true;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Obi App</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top class="toolbar toolbar-ios statusbar-padding">\n    <ion-segment mode="md" [(ngModel)]="galleryType" class="segment segment-ios ng-valid ng-touched ng-dirty">\n      <ion-segment-button value="obituaries">\n        Obituaries\n      </ion-segment-button>\n      <ion-segment-button value="appreciations">\n        Appreciations\n      </ion-segment-button>\n      <ion-segment-button value="memorials">\n        Memorials\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div [ngSwitch]="galleryType">\n    <!-- Responsive Layout with Ion Grid-->\n    <div class="images" *ngSwitchCase="\'obituaries\'">\n      <div class="one-image" *ngFor="let image of [1,2,3,4,5,6,7,8,9,10,11,12]">\n        <img src="assets/imgs/{{image}}.jpg">\n        Nelson Mandela\n      </div>\n    </div>\n\n    <!-- More Pinterest floating gallery style -->\n    <div class="images" *ngSwitchCase="\'appreciations\'">\n      <div class="one-image" *ngFor="let image of [21,22,23,24,25,26,27,28,29,30,31,32]">\n        <img src="assets/imgs/{{image}}.jpg">\n        Winny Mandela\n      </div>\n    </div>\n    <div class="images" *ngSwitchCase="\'memorials\'">\n      <div class="one-image" *ngFor="let image of [41,42,43,44,45,46,47,48,49,50,51,52]">\n        <img src="assets/imgs/{{image}}.jpg">\n        Wangari Maathai\n      </div>\n    </div>\n  </div>\n\n  <!-- Floating Button -->\n  <!--<ion-fab right bottom>-->\n    <!--<button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>-->\n  <!--</ion-fab>-->\n  <ion-fab right bottom>\n    <button ion-fab color="primary"><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-whatsapp"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map