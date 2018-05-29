webpackJsonp([0],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WooListPageModule", function() { return WooListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_list__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WooListPageModule = (function () {
    function WooListPageModule() {
    }
    WooListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_list__["a" /* WooListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_list__["a" /* WooListPage */]),
            ],
        })
    ], WooListPageModule);
    return WooListPageModule;
}());

//# sourceMappingURL=woo-list.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooListPage; });
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



var WooListPage = (function () {
    function WooListPage(navCtrl, navParams, wooProvider, loadingCtrl, toastCtrl, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.page = 1;
        this.route = 'wp-json/wc/v2/products';
        events.subscribe('add_to_cart', function (data) {
            _this.cart_count++;
        });
        events.subscribe('clear_cart', function (data) {
            _this.cart_count = 0;
        });
    }
    WooListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadProducts();
        this.wooProvider.getCartContents().then(function (cart) {
            _this.cart_count = (cart ? cart.length : '');
        });
    };
    WooListPage.prototype.loadProducts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.wooProvider.get(this.route, this.page).then(function (items) {
            console.log(items);
            // Loads posts from WordPress API
            _this.items = items;
            // load more right away
            _this.loadMore(null);
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            console.error('Error getting posts', err);
        });
        // make sure spinner never gets stuck on
        setTimeout(function () {
            loading.dismiss();
        }, 8000);
    };
    WooListPage.prototype.itemTapped = function (event, item) {
        var opt = {};
        this.navCtrl.push('WooDetailPage', {
            item: item
        }, opt);
    };
    WooListPage.prototype.doRefresh = function (refresh) {
        this.loadProducts();
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    WooListPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.wooProvider.get(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            for (var i = 0; i < length; ++i) {
                _this.items.push(items[i]);
            }
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    WooListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooListPage.prototype.showCart = function () {
        this.cartModal = this.modalCtrl.create('CartPage');
        this.cartModal.present();
    };
    WooListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-woo-list',template:/*ion-inline-start:"/home/danco/Ionic/Obi_app/src/pages/woo-list/woo-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>WooCommerce</ion-title>\n  \n\n  	<ion-buttons end>\n		<button ion-button (click)="showCart()">\n			<ion-icon name="cart"></ion-icon>\n      <ion-badge color="dark" item-end>{{cart_count}}</ion-badge>\n		</button>\n	</ion-buttons>\n\n	</ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list class="post-list woocommerce">\n\n    <ion-item *ngFor="let item of items" (tap)="itemTapped($event, item)">\n\n    	<ion-thumbnail item-start *ngIf="item.images">\n	      <img src="{{item.images[0].src}}">\n	    </ion-thumbnail>\n\n		<h2 *ngIf="item.name" [innerHTML]="item.name"></h2>\n\n		<p *ngIf="item.price && !item.sale_price" class="product-price">${{item.price}}</p>\n\n    	<p *ngIf="item.sale_price" class="product-price">Sale! ${{item.sale_price}}</p>\n\n		<p *ngIf="item.description" [innerHTML]="item.description" class="product-description"></p>\n\n		<p *ngIf="item.average_rating != \'0.00\'" class="product-rating"><em>Rating: {{item.average_rating}} stars</em></p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/danco/Ionic/Obi_app/src/pages/woo-list/woo-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], WooListPage);
    return WooListPage;
}());

//# sourceMappingURL=woo-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map