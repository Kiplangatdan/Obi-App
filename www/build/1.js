webpackJsonp([1],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WooDetailPageModule", function() { return WooDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__woo_detail__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WooDetailPageModule = (function () {
    function WooDetailPageModule() {
    }
    WooDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__woo_detail__["a" /* WooDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__woo_detail__["a" /* WooDetailPage */]),
            ],
        })
    ], WooDetailPageModule);
    return WooDetailPageModule;
}());

//# sourceMappingURL=woo-detail.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woo_woo__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WooDetailPage = (function () {
    function WooDetailPage(navCtrl, navParams, sanitizer, storage, toastCtrl, modalCtrl, wooProvider, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.wooProvider = wooProvider;
        this.events = events;
        this.itemAdded = false;
        this.loadProduct();
        this.wooProvider.getCartContents().then(function (cart) {
            _this.cart_count = (cart ? cart.length : '');
        });
        events.subscribe('clear_cart', function (data) {
            _this.cart_count = 0;
        });
    }
    WooDetailPage.prototype.loadProduct = function () {
        this.selectedItem = this.navParams.get('item');
        if (this.selectedItem.description) {
            this.description = this.sanitizer.bypassSecurityTrustHtml(this.selectedItem.description);
        }
        else {
            this.description = '';
        }
        this.getVariations();
    };
    WooDetailPage.prototype.addToCart = function (form) {
        var _this = this;
        var item = form.value;
        item.name = this.selectedItem.name;
        item.product_id = this.selectedItem.id;
        item.price = this.selectedItem.price;
        item.quantity = (item.quantity ? item.quantity : 1);
        this.storage.get('cart').then(function (data) {
            if (data) {
                // if item is already in cart, just bump quantity
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var product = data_1[_i];
                    if (product.product_id === item.product_id) {
                        product.quantity = parseInt(product.quantity) + parseInt(item.quantity);
                        _this.productAddSuccess(data, item);
                        return;
                    }
                }
                data.push(item);
            }
            else {
                data = [item];
            }
            _this.cart_count++;
            _this.events.publish('add_to_cart', item);
            _this.productAddSuccess(data, item);
        });
        // flash cart icon
        this.itemAdded = true;
        setTimeout(function () {
            _this.itemAdded = false;
        }, 1000);
    };
    WooDetailPage.prototype.productAddSuccess = function (data, item) {
        console.log('success', data);
        this.storage.set('cart', data);
        this.presentToast(item.name + ' added to cart!');
    };
    WooDetailPage.prototype.getVariations = function () {
        var _this = this;
        this.wooProvider.get('wp-json/wc/v2/products/' + this.selectedItem.id + '/variations', 'nopaging').then(function (variations) {
            _this.variations = variations;
        });
    };
    WooDetailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    WooDetailPage.prototype.showCart = function () {
        this.cartModal = this.modalCtrl.create('CartPage');
        this.cartModal.present();
    };
    WooDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-woo-detail',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/woo-detail/woo-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><span [innerHTML]="selectedItem.name"></span></ion-title>\n\n    <ion-buttons end>\n		<button ion-button (click)="showCart()" [ngClass]="{ \'item-added\' : itemAdded  }">\n			<ion-icon name="cart"></ion-icon>\n			<ion-badge color="dark" item-end>{{cart_count}}</ion-badge>\n		</button>\n	</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n <div *ngIf="selectedItem" class="selection">\n\n 	<ion-slides pager>\n\n	  <ion-slide *ngFor="let image of selectedItem.images">\n	    <img src="{{image.src}}" />\n	  </ion-slide>\n\n	</ion-slides>\n\n    <h2 [innerHTML]="selectedItem.name"></h2>\n\n    <p *ngIf="selectedItem.price && !selectedItem.sale_price" class="product-price">${{selectedItem.price}}</p>\n\n    <p *ngIf="selectedItem.sale_price" class="product-price">Sale! ${{selectedItem.sale_price}}</p>\n\n	<div *ngIf="description" [innerHTML]="description"></div>\n\n	<p *ngIf="selectedItem.average_rating != \'0.00\'" class="product-rating"><em>Rating: {{selectedItem.average_rating}} stars</em></p>\n\n	<p *ngIf="selectedItem.in_stock" class="product-stock">✓ In Stock.</p>\n\n	<form (ngSubmit)="addToCart(addToCartForm)" #addToCartForm="ngForm">\n\n		<div *ngIf="variations">\n			<ion-item *ngIf="variations.length">\n				<ion-label stacked>Options</ion-label>\n				<ion-select ngModel name="variation_id">\n					<ion-option *ngFor="let variation of variations" value="{{variation.id}}">\n						${{variation.price}} - \n						<div *ngFor="let attr of variation.attributes">\n							{{attr.name}} : {{attr.option}}\n						</div>\n					</ion-option>\n				</ion-select>\n			</ion-item>\n		</div>\n\n		<ion-item class="quantity">\n			<ion-label stacked>Quantity</ion-label>\n			<ion-input type="number" ngModel name="quantity" value="1" size="5" placeholder="1">\n			</ion-input>\n		</ion-item>\n		\n		<button ion-button type="submit" block>Add to Cart</button>\n\n	</form>\n\n </div>\n</ion-content>\n'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/woo-detail/woo-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], WooDetailPage);
    return WooDetailPage;
}());

//# sourceMappingURL=woo-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map