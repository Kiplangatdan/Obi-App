webpackJsonp([10],{

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		299,
		9
	],
	"../pages/checkout/checkout.module": [
		300,
		8
	],
	"../pages/contact/contact.module": [
		301,
		7
	],
	"../pages/home/home.module": [
		302,
		6
	],
	"../pages/login-modal/login-modal.module": [
		303,
		5
	],
	"../pages/post-detail/post-detail.module": [
		304,
		4
	],
	"../pages/post-list/post-list.module": [
		305,
		3
	],
	"../pages/thank-you/thank-you.module": [
		306,
		2
	],
	"../pages/woo-detail/woo-detail.module": [
		307,
		1
	],
	"../pages/woo-list/woo-list.module": [
		308,
		0
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = 'HomePage';
        this.tab2Root = 'PostListPage';
        this.tab3Root = 'WooListPage';
        this.tab4Root = 'ContactPage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Condolences" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Appreciation" tabIcon="basket"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WooProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configure_configure__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WooProvider = (function () {
    function WooProvider(http, storage, configure) {
        this.http = http;
        this.storage = storage;
        this.configure = configure;
        this.data = null;
        this.url = configure.getUrl();
        // add your auth keys in providers/configure
        this.authString = this.configure.getAuth();
    }
    /* Returns promise.
     * Usage:
     */
    WooProvider.prototype.get = function (route, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!route)
                reject({ data: { message: "No URL set. " } });
            var concat;
            // check if url already has a query param
            if (route.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            var url = _this.url + route;
            // set pagination
            if (page === 'nopaging') {
                // get all results with no paging
                url = url + concat + 'per_page=50';
            }
            else if (page) {
                url = url + concat + 'page=' + page;
            }
            else {
                url = url + concat + 'page=1';
            }
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/json',
                    'Authorization': _this.authString
                })
            };
            _this.http.get(url, httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.send = function (data, route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!data)
                reject({ data: { message: "No data." } });
            var url = _this.url + route;
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/json',
                    'Authorization': _this.authString
                })
            };
            _this.http.post(url, data, httpOptions)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
                _this.handleError(error);
            });
        }); // end Promise
    };
    WooProvider.prototype.getCartContents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('cart').then(function (data) {
                resolve(data);
            });
        });
    };
    WooProvider.prototype.handleError = function (err) {
        console.warn(err);
    };
    WooProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__configure_configure__["a" /* Configure */]])
    ], WooProvider);
    return WooProvider;
}());

//# sourceMappingURL=woo.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure_configure__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginProvider = (function () {
    function LoginProvider(http, configure) {
        this.http = http;
        this.configure = configure;
        this.data = null;
        this.url = configure.getUrl();
    }
    /* Returns promise.
     * Usage:
     */
    LoginProvider.prototype.login = function (form, logout) {
        var _this = this;
        if (logout === void 0) { logout = null; }
        return new Promise(function (resolve, reject) {
            if (!_this.url)
                reject({ data: { message: "No URL set. " } });
            var url = _this.url + 'wp-json/app/v1/login';
            var formData = new FormData();
            formData.append("username", form.user);
            formData.append("password", form.pass);
            formData.append("security", 'my-secure-phrase');
            if (logout) {
                formData.append("logout", "true");
            }
            var request = new XMLHttpRequest();
            request.open("POST", url);
            request.send(formData);
            request.onload = function (e) {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        reject(JSON.parse(request.statusText));
                    }
                }
            };
        });
    };
    LoginProvider.prototype.handleError = function (err) {
        console.warn(err);
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__configure_configure__["a" /* Configure */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PostsProvider = (function () {
    function PostsProvider(http) {
        this.http = http;
        this.data = null;
    }
    PostsProvider.prototype.load = function (url, page) {
        // set pagination
        // if( !page ) {
        //   let page = '1';
        // }
        var _this = this;
        return new Promise(function (resolve, reject) {
            var concat;
            // check if url already has a query param
            if (url.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            _this.http.get(url + concat + 'page=' + page)
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                // probably a bad url or 404
                reject(error);
            });
        });
    };
    PostsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsProvider);
    return PostsProvider;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_camera_camera__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_posts_posts__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_woo_woo__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_stripe__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_configure_configure__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalPageModule', name: 'LoginModalPage', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-detail/post-detail.module#PostDetailPageModule', name: 'PostDetailPage', segment: 'post-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-list/post-list.module#PostListPageModule', name: 'PostListPage', segment: 'post-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thank-you/thank-you.module#ThanksPageModule', name: 'ThanksPage', segment: 'thank-you', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/woo-detail/woo-detail.module#WooDetailPageModule', name: 'WooDetailPage', segment: 'woo-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/woo-list/woo-list.module#WooListPageModule', name: 'WooListPage', segment: 'woo-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                // replace key with your Stripe publishable key
                __WEBPACK_IMPORTED_MODULE_13_ngx_stripe__["a" /* NgxStripeModule */].forRoot('pk_test_07YFA0DDYu5miC2ijbhzWOXw')
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_posts_posts__["a" /* PostsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_woo_woo__["a" /* WooProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_configure_configure__["a" /* Configure */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, modalCtrl) {
        var _this = this;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.doMenus();
        });
    }
    MyApp.prototype.doMenus = function () {
        this.menus = [{ title: 'Home', slug: 'HomePage', icon: 'home' }, { title: 'Obituary', slug: 'WooListPage', icon: 'md-add' }, { title: 'Appreciation', slug: 'PostListPage', icon: 'ios-flower' }, { title: 'Memorials', slug: 'ContactPage', icon: 'ios-book-outline' }];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.menuLink = function (item) {
        this.menu.close();
        this.nav.setRoot(item.slug);
    };
    MyApp.prototype.openLoginModal = function () {
        var loginModal = this.modalCtrl.create('LoginModalPage');
        loginModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/app/app.html"*/'<ion-menu *ngIf="menus" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n		<ion-list-header text-wrap *ngIf="login_data">\n		<ion-avatar *ngIf="login_data.avatar">\n		  <img [src]="login_data.avatar" />\n		</ion-avatar>\n		<p class="loggedin-msg"><b>login_data.message</b></p>\n\n		</ion-list-header>\n\n		<button ion-item icon-left *ngFor="let item of menus" (click)="menuLink(item)">\n			<ion-icon name="{{item.icon}}"></ion-icon>\n		{{item.title}}\n		</button>\n		\n		<div padding>\n			<button ion-button block icon-left class="menu-login-button" (click)="openLoginModal()">\n			<ion-icon name="log-in"></ion-icon>\n			<span *ngIf="login_data">Logout</span><span *ngIf="!login_data">Login</span></button>\n		</div>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content></ion-nav>'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configure_configure__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CameraProvider = (function () {
    function CameraProvider(http, camera, transfer, configure) {
        this.http = http;
        this.camera = camera;
        this.transfer = transfer;
        this.configure = configure;
        this.data = null;
        this.url = configure.getUrl();
    }
    CameraProvider.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            console.log(imageData);
            //let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.upload(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    /* Upload our image
     */
    CameraProvider.prototype.upload = function (image) {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: 'myImage.jpg',
            headers: {}
        };
        fileTransfer.upload(image, this.url + 'wp-json/app/v1/camera', options)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__configure_configure__["a" /* Configure */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Configure = (function () {
    function Configure(http) {
        this.http = http;
        // replace with your WordPress site URL. Must be HTTPS for production.
        this.url = 'http://obituaryapp.000webhostapp.com/';
    }
    Configure.prototype.getUrl = function () {
        return this.url;
    };
    /*
     * The WooCommerce REST API requires authorization. Basic auth requires a base64 encoded string of 'Basic ' + btoa('key:secret')
     * Replace the Authorization header below with your own by base64 encoding your consumer key and secret key which you can get in the WooCommerce settings: http://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys
     * Must use HTTPS for basic auth.
     */
    Configure.prototype.getAuth = function () {
        return 'Basic Y2tfZWUwMTBhOWQyOWYxN2Y5NjM4ZDViYjJhZWFhNDMyYzM4N2FmNTJiZTpjc18xMjM5MmYyYmVhMzlhYjZlYTM4NWExYWVmZWFjYzIyNDdkMTcxNjdm';
    };
    Configure = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Configure);
    return Configure;
}());

//# sourceMappingURL=configure.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map