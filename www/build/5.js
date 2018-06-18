webpackJsonp([5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalPageModule", function() { return LoginModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_modal__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModalPageModule = (function () {
    function LoginModalPageModule() {
    }
    LoginModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */]),
            ],
        })
    ], LoginModalPageModule);
    return LoginModalPageModule;
}());

//# sourceMappingURL=login-modal.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(108);
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
 * Generated class for the LoginModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginModalPage = (function () {
    function LoginModalPage(navCtrl, navParams, toastCtrl, loginProvider, loadingCtrl, viewCtrl, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.events = events;
        this.login = {};
        this.loggedin = false;
    }
    LoginModalPage.prototype.ionViewDidLoad = function () {
        this.start();
    };
    LoginModalPage.prototype.start = function () {
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
    LoginModalPage.prototype.doLogin = function () {
        var _this = this;
        if (!this.login)
            this.presentToast('Please enter a valid login.');
        this.showSpinner();
        this.loginProvider.login(this.login).then(function (response) {
            if (!response || response.success === false) {
                _this.loginErr(response);
                return;
            }
            var login_data = response.data;
            console.log(login_data);
            _this.presentToast(login_data.message);
            _this.events.publish('user:login', login_data);
            _this.storage.set('user_login', login_data);
            _this.dismiss();
            _this.hideSpinner();
        }, function (err) {
            _this.hideSpinner();
            _this.loginErr(err);
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.presentToast('There was a problem connecting to the server.');
        });
        // make sure spinner disappears even if there's a problem
        setTimeout(function () {
            _this.hideSpinner();
        }, 5000);
    };
    LoginModalPage.prototype.doLogout = function () {
        var _this = this;
        this.showSpinner();
        this.loginProvider.login({}, true).then(function (response) {
            if (!response || response.success === false) {
                _this.loginErr(response);
                return;
            }
            var login_data = response.data;
            console.log(login_data);
            _this.presentToast(login_data.message);
            _this.events.publish('user:login', login_data);
            _this.storage.remove('user_login');
            _this.dismiss();
            _this.hideSpinner();
        }, function (err) {
            _this.hideSpinner();
            _this.loginErr(err);
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.presentToast('There was a problem connecting to the server.');
        });
        // make sure spinner disappears even if there's a problem
        setTimeout(function () {
            _this.hideSpinner();
        }, 5000);
    };
    LoginModalPage.prototype.loginErr = function (err) {
        console.log(err);
        this.hideSpinner();
        this.presentToast(err.data.message);
    };
    LoginModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginModalPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    LoginModalPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    LoginModalPage.prototype.presentToast = function (msg) {
        console.log(msg);
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-modal',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/login-modal/login-modal.html"*/'<!--\n  Generated template for the LoginModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Login</ion-title>\n	\n\n	<ion-buttons end>\n		<button ion-button (click)="dismiss()">\n			<ion-icon name="close"></ion-icon>\n		</button>\n	</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<form (ngSubmit)="doLogin()" padding *ngIf="!loggedin">\n\n	  <ion-item>\n	    <ion-label stacked>Username</ion-label>\n	    <ion-input type="text" [(ngModel)]="login.user" name="user" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n	  </ion-item>\n	  <ion-item>\n	    <ion-label stacked>Password</ion-label>\n	    <ion-input type="password" [(ngModel)]="login.pass" name="pass" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n	  </ion-item>\n	  \n	  <div padding>\n	  <button ion-button type="submit" block>Submit</button>\n	  </div>\n\n	</form>\n\n	<div *ngIf="loggedin">\n		Welcome back!\n		<p>&nbsp;</p>\n		<button ion-button (click)="doLogout()">Logout</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/login-modal/login-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LoginModalPage);
    return LoginModalPage;
}());

//# sourceMappingURL=login-modal.js.map

/***/ })

});
//# sourceMappingURL=5.js.map