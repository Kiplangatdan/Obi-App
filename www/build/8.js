webpackJsonp([8],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_stripe__ = __webpack_require__(206);
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
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams, wooProvider, loadingCtrl, viewCtrl, storage, toastCtrl, stripeService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooProvider = wooProvider;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.stripeService = stripeService;
        this.order = {
            billing: Object
        };
        this.isLastSlide = false;
        this.billing_shipping_same = true;
        this.stripe_selected = false;
        this.gateway_instructions = '';
        this.shipping_cost = 0;
        // optional parameters
        this.elementsOptions = {
            locale: 'en'
        };
        this.storage.get('cart').then(function (data) {
            if (!data)
                _this.presentToast('No cart items.');
            // console.log('cart', data)
            _this.cart_contents = data;
            for (var i = 0; i < data.length; ++i) {
                var total = parseInt(data[i].price) * parseInt(data[i].quantity);
                _this.cart_total = (_this.cart_total ? _this.cart_total : 0) + total;
            }
        });
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        this.loadStripe();
        this.getGateways();
        this.getShippingZones();
    };
    CheckoutPage.prototype.getGateways = function () {
        var _this = this;
        this.wooProvider.get('/wp-json/wc/v2/payment_gateways', null).then(function (response) {
            // console.log(response)
            _this.gateways = [];
            for (var i = 0; i < response.length; ++i) {
                if (response[i].enabled) {
                    _this.gateways.push(response[i]);
                }
            }
        });
    };
    // first we need to get the zones, which have all the data we need
    CheckoutPage.prototype.getShippingZones = function () {
        var _this = this;
        this.wooProvider.get('/wp-json/wc/v2/shipping/zones', null).then(function (response) {
            // console.log(response)
            _this.shipping_zones = response;
        });
    };
    // once a zone is selected, we get the methods from that zone
    CheckoutPage.prototype.zoneChange = function (zone_id) {
        if (zone_id) {
            this.getShippingMethods(zone_id);
        }
    };
    // get methods from a specific zone, which has cost data
    CheckoutPage.prototype.getShippingMethods = function (id) {
        var _this = this;
        this.wooProvider.get('/wp-json/wc/v2/shipping/zones/' + id + '/methods', 'nopaging').then(function (response) {
            // console.log(response)
            _this.shipping_methods = response;
        });
    };
    CheckoutPage.prototype.gatewaySelected = function (gateway) {
        // console.log(gateway, this.gateways)
        if (gateway === 'stripe') {
            this.stripe_selected = true;
        }
        else {
            this.stripe_selected = false;
        }
        for (var i = 0; i < this.gateways.length; ++i) {
            if (gateway === this.gateways[i].id) {
                this.gateway_instructions = this.gateways[i].description;
                return;
            }
            else {
                this.gateway_instructions = '';
            }
        }
    };
    CheckoutPage.prototype.loadStripe = function () {
        var _this = this;
        this.stripeService.elements(this.elementsOptions)
            .subscribe(function (elements) {
            _this.elements = elements;
            // Only mount the element the first time
            if (!_this.card) {
                console.log('creating card');
                _this.card = _this.elements.create('card', {
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '18px',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                _this.card.mount('#card-element');
            }
        });
    };
    CheckoutPage.prototype.submit = function () { };
    CheckoutPage.prototype.doCheckout = function (data) {
        var _this = this;
        // console.log(data.value)
        var order = data.value;
        if (!order) {
            this.presentToast('No order data submitted.');
            return;
        }
        if (!this.cart_contents) {
            this.presentToast('No cart items.');
            return;
        }
        if (!order.billing.first_name || !order.billing.postcode || !order.payment_method) {
            this.presentToast('Please fill out all required fields.');
            this.slides.slideTo(0);
            return;
        }
        if (order.billing.billing_shipping_same === false) {
            // fill shipping address
        }
        else {
            order.shipping = order.billing;
        }
        if (order.shipping_lines && order.shipping_lines.method_id) {
            var split = order.shipping_lines.method_id.split("::");
            order.shipping_lines.method_id = split[0];
            order.shipping_lines.method_title = split[1];
            order.shipping_lines.total = split[2];
        }
        order.shipping_lines = [order.shipping_lines];
        // console.log(order.shipping_lines)
        order.line_items = [];
        for (var i = 0; i < this.cart_contents.length; ++i) {
            order.line_items[i] = {
                product_id: this.cart_contents[i].product_id,
                variation_id: this.cart_contents[i].variation_id,
                quantity: parseInt(this.cart_contents[i].quantity)
            };
        }
        this.showSpinner();
        this.wooProvider.send(order, 'wp-json/wc/v2/orders').then(function (response) {
            if (!response.id) {
                // console.log(response)
                _this.hideSpinner();
                _this.presentToast('There was a problem processing your order, please try again.');
                return;
            }
            if (order.payment_method === 'stripe') {
                _this.stripePayment(response.id, _this.card, order.billing.first_name);
            }
        }, function (err) {
            _this.hideSpinner();
            console.log(err);
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
    CheckoutPage.prototype.stripePayment = function (order_id, card, name) {
        // console.log('stripe payment', order_id, card, name)
        var _this = this;
        this.stripeService
            .createToken(card, { name: name })
            .subscribe(function (result) {
            if (result.token) {
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
                _this.sendToken(result.token.id, order_id);
            }
            else if (result.error) {
                // Error creating the token
                console.log(result.error.message);
            }
        });
    };
    CheckoutPage.prototype.sendToken = function (token, order_id) {
        var _this = this;
        var data = {
            order_id: order_id,
            payment_token: token,
            payment_method: 'stripe'
        };
        // console.log('send token', data)
        this.wooProvider.send(data, 'wp-json/wc/v2/stripe-payment').then(function (response) {
            // console.log(response)
            _this.presentToast('Thank you for your order!');
            _this.storage.remove('cart');
            var opt = {};
            _this.navCtrl.push('ThanksPage', {
                order_id: order_id
            }, opt);
            _this.dismiss();
        }, function (err) {
            _this.hideSpinner();
            console.log(err);
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.presentToast('There was a problem connecting to the server.');
        });
    };
    CheckoutPage.prototype.shippingCost = function (e) {
        console.log(e);
        if (e.indexOf('::') >= 0) {
            var split = e.split("::");
            this.shipping_cost = parseInt(split[2]);
        }
    };
    CheckoutPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CheckoutPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    CheckoutPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    CheckoutPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    CheckoutPage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    CheckoutPage.prototype.prevSlide = function () {
        this.slides.slidePrev();
    };
    CheckoutPage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            this.isLastSlide = true;
        }
        else {
            this.isLastSlide = false;
        }
    };
    CheckoutPage.prototype.billingShippingToggle = function (e) {
        this.billing_shipping_same = e.checked;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], CheckoutPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('card'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CheckoutPage.prototype, "cardRef", void 0);
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/danco/Ionic/Obi_app/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title>Checkout</ion-title>\n\n    <ion-buttons end>\n		<button ion-button (click)="dismiss()">\n			Cancel\n		</button>\n	</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<form (ngSubmit)="doCheckout(checkoutForm)" #checkoutForm="ngForm">\n\n	<ion-slides (ionSlideDidChange)="slideChanged()">\n		<ion-slide>\n			<h2>Billing Details</h2>\n\n			<ion-list ngModelGroup="billing">\n\n				<ion-item>\n				<ion-label stacked>First Name</ion-label>\n				<ion-input type="text" ngModel name="first_name" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Last Name</ion-label>\n				<ion-input type="text" ngModel name="last_name" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Email</ion-label>\n				<ion-input type="email" ngModel name="email" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Address</ion-label>\n				<ion-input type="text" ngModel name="address_1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>City</ion-label>\n				<ion-input type="text" ngModel name="city" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>State</ion-label>\n				<ion-input type="text" ngModel name="state" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Postcode</ion-label>\n				<ion-input type="number" ngModel name="postcode" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Use same details for shipping?</ion-label>\n				<ion-checkbox name="billing_shipping_same" ngModel (ionChange)="billingShippingToggle($event)" checked="true">1</ion-checkbox>\n				</ion-item>\n\n			</ion-list>\n\n		</ion-slide>\n\n		<ion-slide *ngIf="!billing_shipping_same">\n\n			<ion-icon name="arrow-back" class="checkout-slide-back" (click)="prevSlide()"></ion-icon>\n\n			<h2>Shipping Address</h2>\n\n			<div ngModelGroup="shipping">\n\n			<ion-list>\n\n				<ion-item>\n				<ion-label stacked>First Name</ion-label>\n				<ion-input type="text" ngModel name="first_name" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Last Name</ion-label>\n				<ion-input type="text" ngModel name="last_name" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Email</ion-label>\n				<ion-input type="email" ngModel name="email" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Address</ion-label>\n				<ion-input type="text" ngModel name="address_1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>City</ion-label>\n				<ion-input type="text" ngModel name="city" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>State</ion-label>\n				<ion-input type="text" ngModel name="state" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n				<ion-item>\n				<ion-label stacked>Postcode</ion-label>\n				<ion-input type="number" ngModel name="postcode" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n				</ion-item>\n\n			</ion-list>\n\n			</div>\n\n		</ion-slide>\n\n		<ion-slide>\n			\n			<ion-icon name="arrow-back" class="checkout-slide-back" (click)="prevSlide()"></ion-icon>\n\n			<h2>Choose a shipping zone</h2>\n\n			<ion-list radio-group ngModel name="shipping_zone" (ionChange)="zoneChange($event)">\n\n				<ion-item *ngFor="let zone of shipping_zones">\n				<ion-label>{{zone.name}}</ion-label>\n				<ion-radio value="{{zone.id}}"></ion-radio>\n				</ion-item>\n\n			</ion-list>\n			\n			<div ngModelGroup="shipping_lines" *ngIf="shipping_methods">\n\n			<h2>Shipping Method</h2>\n\n				<ion-list radio-group ngModel name="method_id" (ionChange)="shippingCost($event)">\n\n					<ion-item *ngFor="let method of shipping_methods">\n					<ion-label>{{method.method_title}} ${{ method.settings.cost ? method.settings.cost.value : \'0\'}}</ion-label>\n					<ion-radio value="{{method.method_id}}::{{method.method_title}}::{{ method.settings.cost ? method.settings.cost.value : 0}}"></ion-radio>\n					</ion-item>\n\n				</ion-list>\n\n			</div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<ion-icon name="arrow-back" class="checkout-slide-back" (click)="prevSlide()"></ion-icon>\n\n			<h2>Payment Method</h2>\n\n			<ion-list>\n\n				<ion-item>\n				<ion-label stacked>Payment Method</ion-label>\n				<ion-select ngModel name="payment_method">\n				<ion-option  *ngFor="let gateway of gateways" value="{{gateway.id}}" (ionSelect)="gatewaySelected($event)">{{gateway.title}}</ion-option>\n				</ion-select>\n				</ion-item>\n\n			</ion-list>\n\n			<p *ngIf="gateway_instructions != \'\'">{{gateway_instructions}}</p>\n			\n			<div id="stripe-payment-form" [hidden]="!stripe_selected">\n				<div id="card-element" class="field"></div>\n			</div>\n\n		</ion-slide>\n\n		<ion-slide>\n\n			<ion-icon name="arrow-back" class="checkout-slide-back" (click)="prevSlide()"></ion-icon>\n\n			<h2>Order Summary</h2>\n\n			<ion-list>\n\n				<ion-item *ngFor="let item of cart_contents">\n\n				<h3 *ngIf="item.name" [innerHTML]="item.name"></h3>\n\n				<p *ngIf="item.price && !item.sale_price" class="product-price">${{item.price}}</p>\n\n				<p *ngIf="item.sale_price" class="product-price">Sale! ${{item.sale_price}}</p>\n\n				</ion-item>\n				\n				<ion-item *ngIf="shipping_cost > 0">\n					<p>Shipping: ${{shipping_cost}}</p>\n				</ion-item>\n\n				<ion-item>\n					<h2>Order total: ${{cart_total + shipping_cost}}</h2>\n				</ion-item>\n\n				<div padding>\n				<button ion-button type="submit" block (click)="submit()">Place Order</button>\n				</div>\n\n			</ion-list>\n\n		</ion-slide>\n\n	</ion-slides>\n	  \n\n	</form>\n\n</ion-content>\n\n<ion-footer *ngIf="!isLastSlide">\n	<div class="checkout-button" (click)="nextSlide()">Continue</div>\n</ion-footer>'/*ion-inline-end:"/home/danco/Ionic/Obi_app/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_woo_woo__["a" /* WooProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_stripe__["b" /* StripeService */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=8.js.map