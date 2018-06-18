webpackJsonp([9],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
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



var CartPage = (function () {
    function CartPage(navCtrl, navParams, storage, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.events = events;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        this.getCartItems();
    };
    CartPage.prototype.getCartItems = function () {
        var _this = this;
        this.storage.get('cart').then(function (data) {
            if (!data)
                return;
            _this.items = data;
            for (var i = 0; i < data.length; ++i) {
                var total = parseInt(data[i].price) * parseInt(data[i].quantity);
                _this.cart_total = (_this.cart_total ? _this.cart_total : 0) + total;
            }
        });
    };
    CartPage.prototype.clearCart = function () {
        this.storage.remove('cart');
        this.items = [];
        this.cart_total = 0;
        this.events.publish('clear_cart', 0);
    };
    CartPage.prototype.goCheckout = function () {
        this.navCtrl.push('CheckoutPage');
        this.dismiss();
    };
    CartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/cart/cart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cart</ion-title>\n\n    <ion-buttons end>\n		<button ion-button (click)="dismiss()">\n			<ion-icon name="close"></ion-icon>\n		</button>\n	</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="!items">\n    <p>Your cart is empty.</p>\n    <button ion-button (click)="dismiss()">Continue Shopping</button>\n  </div>\n\n	<ion-list class="post-list woocommerce" *ngIf="items">\n\n    <ion-item *ngFor="let item of items">\n\n    	<ion-thumbnail item-start *ngIf="item.images">\n	      <img src="{{item.images[0].src}}">\n	    </ion-thumbnail>\n\n  		<h2 *ngIf="item.name" [innerHTML]="item.name"></h2>\n\n  		<ion-grid>\n        <ion-row>\n          <ion-col col-10><p *ngIf="item.price" class="product-price">${{item.price}}</p></ion-col>\n          <ion-col col-2><p *ngIf="item.quantity" class="product-price">{{item.quantity}}</p></ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n      Cart total: ${{cart_total}}\n    </ion-item>\n\n    <ion-item>\n      <button ion-button icon-left color="light" (click)="clearCart()"><ion-icon name="trash"></ion-icon> Clear Cart</button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar *ngIf="items">\n\n      <button ion-button full color="secondary" (click)="goCheckout()">\n        Checkout\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=9.js.map