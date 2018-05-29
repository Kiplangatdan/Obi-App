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
            selector: 'page-home',template:/*ion-inline-start:"/home/danco/Ionic/Obi_app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Obi App</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card>\n\n    <img src="assets/imgs/mac-iphone-500.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title class="big-title">\n        WP Ionic\n      </ion-card-title>\n\n      <p>This app is an example of integrating WordPress with an Ionic mobile app using the WP-API. To learn how to configure this app, please visit <a href="http://scottbolinger.com/ionic-wordpress-app/" target="_blank">scottbolinger.com</a></p>\n\n      <p><strong>Features:</strong></p>\n\n      <ul>\n        <li>Posts, including CPTs, taxonomies, and more</li>\n        <li>Pages and custom API endpoints</li>\n        <li>Login and hide/show membership content</li>\n        <li>WooCommerce REST API integration with Stripe payments</li>\n        <li>Tabs and/or side menu</li>\n      </ul>\n\n      <p><strong>Setup Instructions:</strong></p>\n\n      <ol>\n        <li>Visit providers/configure/configure.ts and add your website url. To use WooCommerce, add your auth key as described. To use Stripe, add your publishable key in app.module.ts.</li>\n        <li>Install and activate this plugin on your WordPress site: https://github.com/scottopolis/sb-app-integration</li>\n      </ol>\n\n      <button ion-button block (click)="pushPage(\'PostListPage\')">View Posts</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n  <ion-card>\n\n    <img src="assets/imgs/login.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title class="big-title">\n        Login\n      </ion-card-title>\n\n      <p>You can hide content until a member is logged in. For example, a video will appear below after you login (use the side menu).</p>\n\n      <button ion-button block (click)="openLoginModal()"><span *ngIf="!loggedin">Login</span><span *ngIf="loggedin">Logout</span></button>\n\n      <div *ngIf="loggedin">\n        <p>&nbsp;</p>\n        <h2>MEMBERS ONLY CONTENT</h2>\n        <p>Here\'s your super special bonus...</p>\n        <iframe width="560" height="315" src="https://www.youtube.com/embed/XtdQz6piFpI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <img src="assets/imgs/woo-placeholder.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title class="big-title">\n        Appreciation\n      </ion-card-title>\n\n      <p>This app can show your products, add to cart, and checkout with Stripe all using the WooCommerce REST API. (Some setup is required)</p>\n\n      <button ion-button block (click)="pushPage(\'WooListPage\')">View Posts</button>\n\n    </ion-card-content>\n\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/home/danco/Ionic/Obi_app/src/pages/home/home.html"*/
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