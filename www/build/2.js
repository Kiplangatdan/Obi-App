webpackJsonp([2],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thank_you__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThanksPageModule = (function () {
    function ThanksPageModule() {
    }
    ThanksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thank_you__["a" /* ThanksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thank_you__["a" /* ThanksPage */]),
            ],
        })
    ], ThanksPageModule);
    return ThanksPageModule;
}());

//# sourceMappingURL=thank-you.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThanksPage = (function () {
    function ThanksPage(navCtrl, navParams, wooProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
    }
    ThanksPage.prototype.ionViewDidLoad = function () {
        this.order_id = this.navParams.get('order_id');
        if (this.order_id)
            this.getOrder();
    };
    ThanksPage.prototype.getOrder = function () {
        var _this = this;
        this.wooProvider.get('/wp-json/wc/v2/orders/' + this.order_id, 'nopaging').then(function (response) {
            console.log(response);
            _this.order = response;
        });
    };
    ThanksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/thank-you/thank-you.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Thank You!</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div *ngIf="order">\n		<h2>Thank you for your order!</h2>\n\n		<ion-list>\n\n			<ion-item *ngFor="let item of order.line_items">\n				<p>{{item.name}}</p>\n				<p>{{item.total}}</p>\n			</ion-item>\n			<ion-item><strong>Total: {{order.total}}</strong></ion-item>\n			<ion-item><p>Status: {{order.status}}</p></ion-item>\n		</ion-list>\n\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/thank-you/thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */]])
    ], ThanksPage);
    return ThanksPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ })

});
//# sourceMappingURL=2.js.map