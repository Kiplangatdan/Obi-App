webpackJsonp([3],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListPageModule", function() { return PostListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_list__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostListPageModule = (function () {
    function PostListPageModule() {
    }
    PostListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_list__["a" /* PostListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_list__["a" /* PostListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__post_list__["a" /* PostListPage */]
            ]
        })
    ], PostListPageModule);
    return PostListPageModule;
}());

//# sourceMappingURL=post-list.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_configure_configure__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListPage = (function () {
    function PostListPage(navCtrl, navParams, postService, loadingCtrl, toastCtrl, configure) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.configure = configure;
        this.page = 1;
        var url = configure.getUrl();
        // put your desired WP-API route here. URL params, CPTs, and custom routes all OK
        this.route = url + 'wp-json/wp/v2/posts';
    }
    PostListPage.prototype.ionViewDidLoad = function () {
        this.loadPosts();
    };
    PostListPage.prototype.loadPosts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(this.route, this.page).then(function (items) {
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
    PostListPage.prototype.itemTapped = function (event, item) {
        var opt = {};
        this.navCtrl.push('PostDetailPage', {
            item: item
        }, opt);
    };
    PostListPage.prototype.doRefresh = function (refresh) {
        this.loadPosts();
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    PostListPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.postService.load(this.route, this.page).then(function (items) {
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
    PostListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'normal-toast'
        });
        toast.present();
    };
    PostListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-list',template:/*ion-inline-start:"/home/danco/Ionic/ObiApp/src/pages/post-list/post-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Posts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list class="post-list">\n\n    <ion-item *ngFor="let item of items" (tap)="itemTapped($event, item)">\n\n      <ion-avatar item-left *ngIf="item.featured_image_urls">\n        <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" src="{{item.featured_image_urls.thumbnail}}">\n        <img *ngIf="!item.featured_image_urls || !item.featured_image_urls.thumbnail" src="assets/default.png">\n      </ion-avatar>\n\n      <h2 *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h2>\n\n      <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/danco/Ionic/ObiApp/src/pages/post-list/post-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* PostsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_configure_configure__["a" /* Configure */]])
    ], PostListPage);
    return PostListPage;
}());

//# sourceMappingURL=post-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map