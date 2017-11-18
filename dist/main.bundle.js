webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_safe_url_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe.url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe.html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_34__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_31_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_35__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_36__services_authentication_service_client__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");

















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/search', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n  <h4>\r\n    <a routerLink=\"login\">Assignment login page</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand\"><b>Pages</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin jy-nav-right-margin hidden-sm hidden-md hidden-lg\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand jv-no-left-padding\"><b>Edit Page</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a (click)=\"updatePage()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n\n        <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n            </div>\n\n            <div class=\"col-xs-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\" *ngIf=\"page\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"pageName\" name=\"pageName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pageTitle\">Title</label>\n          <input [(ngModel)]=\"page.description\" type=\"text\" class=\"form-control\" id=\"pageTitle\" name=\"pageDesp\">\n        </div>\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n      <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</a>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(pageService, acRoute, router) {
        this.pageService = pageService;
        this.acRoute = acRoute;
        this.router = router;
        this.errorMsg = 'Page name cannot be empty';
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId)
                .subscribe(function (page) {
                _this.page = page;
            });
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function () {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        if (this.page.name) {
            this.errorFlag = false;
            this.pageService.updatePage(this.pageId, this.page).subscribe(function (page) {
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Pages</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <p class=\"jy-no-margin\">Name</p>\n        </div>\n        <div class=\"col-sm-3 hidden-xs\">\n          <p class=\"jy-no-margin\">Owner</p>\n        </div>\n        <div class=\"col-md-3 hidden-xs hidden-sm\">\n          <p class=\"jy-no-margin\">Date created</p>\n        </div>\n        <div class=\"col-xs-3\">\n          <p class=\"jy-no-margin pull-right\">Edit</p>\n        </div>\n\n      </div>\n    </li>\n\n    <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n        </div>\n        <div class=\"col-sm-3 hidden-xs\">\n          <p class=\"jy-no-margin\">{{page.owner}}</p>\n        </div>\n        <div class=\"col-md-3 hidden-xs hidden-sm\">\n          <p class=\"jy-no-margin\">{{page.dateCreated}}</p>\n        </div>\n        <div class=\"col-xs-3\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n\n  </ul>\n\n</div>\n\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, acRoute) {
        this.pageService = pageService;
        this.acRoute = acRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand\"><b>Pages</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin jy-nav-right-margin hidden-sm hidden-md hidden-lg\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand jv-no-left-padding\"><b>New Page</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a (click)=\"createPage()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n\n        <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n            </div>\n\n            <div class=\"col-xs-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"pageName\">Name</label>\n          <input [(ngModel)]=\"pageName\" type=\"text\" class=\"form-control\" id=\"pageName\"\n                 name=\"pageName\" placeholder=\"Page Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pageTitle\">Title</label>\n          <input [(ngModel)]=\"pageDesp\" type=\"text\" class=\"form-control\" id=\"pageTitle\"\n                 name=\"pageDesp\" placeholder=\"Page Title\">\n        </div>\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, acRoute, router) {
        this.pageService = pageService;
        this.acRoute = acRoute;
        this.router = router;
        this.errorMsg = 'Page name cannot be empty';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        if (this.pageName) {
            this.errorFlag = false;
            var page = {
                name: this.pageName,
                description: this.pageDesp
            };
            this.pageService.createPage(this.websiteId, page)
                .subscribe(function (newPage) {
                _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n  <!--<h1>Login</h1>-->\n  <!--<input placeholder=\"username\" type=\"text\" class=\"form-control\"/>-->\n  <!--<input placeholder=\"password\" type=\"password\" class=\"form-control\"/>-->\n  <!--<a class=\"btn btn-primary btn-block\" [routerLink]=\"['/user']\" >Login</a>-->\n  <!--<a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>-->\n<!--</div>-->\n\n<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required\n             #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n   </span>\n\n    <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ngModel required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n   </span>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <a href=\"/auth/facebook\" class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n    <a class=\"btn btn-success btn-block\" [routerLink]=\"['/register']\">Register</a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            console.log(user);
            _this.sharedService.user = user;
            _this.router.navigate(['profile']);
        }, function (err) {
            console.log(err);
            if (err === 'Unauthorized') {
                _this.errorFlag = true;
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n\n  <a class=\"navbar-brand\"><b>Profile</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a (click)=\"updateUser()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container jy-below-nav\" *ngIf=\"user\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"userName\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"email\" name=\"userEmail\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" name=\"userFName\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" name=\"userLName\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{user._id}}/website\">Websites</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"logout()\" >Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a *ngIf=\"user\" routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, acRoute, sharedService, router) {
        this.userService = userService;
        this.acRoute = acRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            // console.log('Profile compoment params change');
            // this.userId = params['uid'];
            // this.userService.findUserById(this.userId)
            //   .subscribe((user: User) => {
            //     console.log('user found from service');
            //     this.user = user;
            //   });
            _this.user = _this.sharedService.user || {};
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (user) {
            console.log('user updated from service');
            _this.user = user;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <input name=\"username\" placeholder=\"username\" type=\"text\" class=\"form-control\"\n           required [(ngModel)] = \"username\"/>\n    <input name=\"password1\" placeholder=\"password\" type=\"password\" class=\"form-control\"\n           required [(ngModel)] = \"password1\"/>\n    <input name=\"password2\" placeholder=\"verify password\" type=\"password\" class=\"form-control\"\n           required [(ngModel)] = \"password2\"/>\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\n    <a class=\"btn btn-danger btn-block\" routerLink=\"/login\" >Cancel</a>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Password does not match';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.password1 === this.password2) {
            this.userService.findUserByUsername(this.username).subscribe(function (data) {
                if (data) {
                    _this.errorMsg = 'Username already taken';
                    _this.errorFlag = true;
                }
                else {
                    _this.errorFlag = false;
                    var user = {
                        username: _this.username,
                        password: _this.password1
                    };
                    _this.userService.register(user.username, user.password)
                        .subscribe(function (newUser) {
                        _this.sharedService.user = newUser;
                        _this.router.navigate(['profile']);
                    });
                }
            });
        }
        else {
            this.errorMsg = 'Password does not match';
            this.errorFlag = true;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand\"><b>Websites</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin jy-nav-right-margin hidden-sm hidden-md hidden-lg\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand jv-no-left-padding\"><b>Edit Website</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a (click)=\"updateWebsite()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n\n        <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n\n            <div class=\"col-xs-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\" *ngIf=\"website\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input [(ngModel)] = \"website.name\" type=\"text\" class=\"form-control\" id=\"websiteName\" name=\"websiteName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDesp\">Website Description</label>\n          <textarea [(ngModel)] = \"website.description\" rows=\"5\" class=\"form-control\" id=\"websiteDesp\" name=\"websiteDesp\"></textarea>\n        </div>\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n      <button (click)=\"deleteWebsite()\" class=\"btn btn-danger btn-block \">Delete</button>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\"  class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(webService, acRoute, router) {
        this.webService = webService;
        this.acRoute = acRoute;
        this.router = router;
        this.websites = [];
        this.errorMsg = 'Website name cannot be empty';
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.webService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.webService.findWebsiteById(_this.websiteId)
                .subscribe(function (website) {
                console.log(website);
                _this.website = website;
            });
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.webService.deleteWebsite(this.websiteId)
            .subscribe(function (website) {
            _this.router.navigate(['user', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (this.website.name) {
            this.errorFlag = false;
            this.webService.updateWebsite(this.websiteId, this.website)
                .subscribe(function () {
                _this.router.navigate(['user', _this.userId, 'website']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}\"class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Websites</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <p class=\"jy-no-margin\">Name</p>\n        </div>\n        <div class=\"col-sm-3 hidden-xs\">\n          <p class=\"jy-no-margin\">Owner</p>\n        </div>\n        <div class=\"col-md-3 hidden-xs hidden-sm\">\n          <p class=\"jy-no-margin\">Date created</p>\n        </div>\n        <div class=\"col-xs-3\">\n          <p class=\"jy-no-margin pull-right\">Edit</p>\n        </div>\n\n      </div>\n    </li>\n\n    <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-xs-9 col-sm-6 col-md-3\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n        </div>\n        <div class=\"col-sm-3 hidden-xs\">\n          <p class=\"jy-no-margin\">{{website.owner}}</p>\n        </div>\n        <div class=\"col-md-3 hidden-xs hidden-sm\">\n          <p class=\"jy-no-margin\">{{website.dateCreated}}</p>\n        </div>\n        <div class=\"col-xs-3\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </div>\n      </div>\n    </li>\n\n  </ul>\n\n</div>\n\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(webService, acRoute) {
        this.webService = webService;
        this.acRoute = acRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand\"><b>Websites</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <p class=\"navbar-text pull-left jy-nav-left-margin jy-nav-right-margin hidden-sm hidden-md hidden-lg\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"navbar-brand jv-no-left-padding\"><b>New Website</b></a>\n      <p class=\"navbar-text pull-right jy-nav-right-margin\">\n        <a (click)=\"createWebsite()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n\n        <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n            </div>\n\n            <div class=\"col-xs-3\">\n              <a routerLink=\"/user/{{userId}}/website/{{website._id}}\" class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-12 col-sm-8\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Name</label>\n          <input [(ngModel)]=\"websiteName\" type=\"text\" class=\"form-control\" name=\"websiteName\"\n                 id=\"websiteName\" placeholder=\"Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDesp\">Description</label>\n          <textarea [(ngModel)]=\"websiteDesp\" rows=\"5\" class=\"form-control\" name=\"websiteDesp\"\n                    id=\"websiteDesp\" placeholder=\"Description\"></textarea>\n        </div>\n        <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n          {{errorMsg}}\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(webService, acRoute, router) {
        this.webService = webService;
        this.acRoute = acRoute;
        this.router = router;
        this.websites = [];
        this.errorMsg = 'Website name cannot be empty';
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webService.findWebsitesByUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        if (this.websiteName) {
            this.errorFlag = false;
            var website = {
                name: this.websiteName,
                description: this.websiteDesp
            };
            this.webService.createWebsite(this.userId, website)
                .subscribe(function (newWebsite) {
                _this.router.navigate(['user', _this.userId, 'website']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"  class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Choose Widget</b></a>\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item jy-no-border\">\n      <a (click)=\"createWidget('HEADING')\">Header</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a routerLink=\"./\">Label</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a (click)=\"createWidget('HTML')\">HTML</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a (click)=\"createWidget('INPUT')\">Text Input</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a routerLink=\"./\">Link</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a routerLink=\"./\">Button</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a (click)=\"createWidget('IMAGE')\">Image</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a (click)=\"createWidget('YOUTUBE')\">YouTube</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a routerLink=\"./\">Data Table</a>\n    </li>\n    <li class=\"list-group-item jy-no-border\">\n      <a routerLink=\"./\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, acRoute, router) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var widget = {
            type: type
        };
        if (type === 'HEADING') {
            widget['size'] = 2;
        }
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (newWidget) {
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId,
                'page', _this.pageId, 'widget', newWidget._id]);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Edit Widget</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a (click)=\"updateWidget()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div [ngSwitch]=\"widget?.type\">\n\n    <div *ngSwitchCase='HEADING'>\n      <app-widget-header [widget]=\"widget\"></app-widget-header>\n    </div>\n\n    <div *ngSwitchCase='IMAGE'>\n      <app-widget-image [widget]=\"widget\"></app-widget-image>\n    </div>\n\n    <div *ngSwitchCase='YOUTUBE'>\n      <app-widget-youtube [widget]=\"widget\"></app-widget-youtube>\n    </div>\n\n    <div *ngSwitchCase='HTML'>\n      <app-widget-html [widget]=\"widget\"></app-widget-html>\n    </div>\n\n    <div *ngSwitchCase='INPUT'>\n      <app-widget-text [widget]=\"widget\"></app-widget-text>\n    </div>\n  </div>\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-danger btn-block jy-margin-top-5\" >Delete</a>\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, acRoute, router) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
        this.router = router;
        this.HEADING = 'HEADING';
        this.IMAGE = 'IMAGE';
        this.YOUTUBE = 'YOUTUBE';
        this.HTML = 'HTML';
        this.INPUT = 'INPUT';
        this.errorMsg = 'Widget name cannot be empty';
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                console.log('widget edit page');
                console.log(_this.widget);
            });
        });
    };
    WidgetEditComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditComponent.prototype.updateWidget = function () {
        var _this = this;
        if (this.widget.name) {
            this.errorFlag = false;
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(function (widget) {
                _this.router.navigate(['user', _this.userId, 'website',
                    _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form>\n  <div class=\"form-group\">\n    <label for=\"headingName\">Name</label>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"headingName\"\n           name=\"widgetName\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"headingText\">Text</label>\n    <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"headingText\"\n           name=\"widgetText\" placeholder=\"Heading Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"headingSize\">Size</label>\n    <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"headingSize\"\n           name=\"widgetSize\" placeholder=\"1-6\">\n  </div>\n</form>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, acRoute) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        this.acRoute.params.subscribe(function (params) {
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetHeaderComponent.prototype, "widget", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHeaderComponent);

var _a, _b;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n  <label for=\"htmlName\">Name</label>\n  <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"htmlName\"\n         name=\"widgetName\" placeholder=\"Name\">\n</div>\n<quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent() {
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetHtmlComponent.prototype, "widget", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHtmlComponent);

//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Search Flickr</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a (click)=\"setImage()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </p>\n</nav>\n\n<div class=\"container-fluid jy-below-nav\">\n  <div class=\"input-group jy-margin-bottom-5\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos; index as i\" class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(i, pic)\" width=\"100%\" [ngClass]=\"{'jy-image-border': i == selectedIndex}\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_q.jpg']\"/>\n      <p></p>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(widgetService, acRoute, router, flickrService) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
        this.router = router;
        this.flickrService = flickrService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService.searchPhotos(this.searchText)
            .subscribe(function (data) {
            // console.log(data._body);
            var body = JSON.parse(data._body);
            // console.log(body);
            _this.photos = body.photos.photo;
            console.log(_this.photos);
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (i, pic) {
        this.selectedPhoto = pic;
        this.selectedIndex = i;
        console.log(this.selectedPhoto);
    };
    FlickrImageSearchComponent.prototype.setImage = function () {
        var _this = this;
        var url = 'https://farm' + this.selectedPhoto.farm + '.staticflickr.com/' + this.selectedPhoto.server;
        url += '/' + this.selectedPhoto.id + '_' + this.selectedPhoto.secret + '_b.jpg';
        this.widget.url = url;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(function () {
            _this.router.navigate(['user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget', _this.widgetId]);
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form #f=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"imageName\">Name</label>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"imageName\"\n           name=\"widgetName\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"imageText\">Text</label>\n    <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"imageText\"\n           name=\"widgetText\" placeholder=\"Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"imageURL\">URL</label>\n    <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"imageURL\"\n           name=\"widgetUrl\" placeholder=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"imageWidth\">Width</label>\n    <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"imageWidth\"\n           name=\"widgetWidth\" placeholder=\"100%\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"imageUpload\">Upload</label>\n    <input (change)=fileEvent($event) name=\"myFile\" type=\"file\" class=\"form-control\" id=\"imageUpload\">\n  </div>\n  <button (click)=\"uploadImage()\" class=\"btn btn-primary btn-block jy-margin-bottom-5\">Upload Image</button>\n</form>\n\n<a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/search\"\n   class=\"btn btn-info btn-block jy-margin-bottom-5\">Search Image</a>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, acRoute, router) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.baseUrl = this.widgetService.baseUrl;
        this.acRoute.params.subscribe(function (params) {
        });
    };
    WidgetImageComponent.prototype.fileEvent = function ($event) {
        this.fileSelected = $event.target.files[0];
        console.log('file selected: ');
        console.log(this.fileSelected);
    };
    WidgetImageComponent.prototype.uploadImage = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('myFile', this.fileSelected);
        formData.append('widgetId', this.widget._id);
        console.log('Upload, image widget');
        console.log();
        this.widgetService.uploadFile(formData)
            .subscribe(function (widget) {
            console.log(widget);
            _this.router.navigate(['user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetImageComponent.prototype, "widget", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"Name\">Name</label>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"Name\"\n           name=\"name\" placeholder=\"Name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"Text\">Text</label>\n    <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"Text\"\n           name=\"text\" placeholder=\"Text\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"Rows\">Rows</label>\n    <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" id=\"Rows\"\n           name=\"rows\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"Placeholder\">Placeholder</label>\n    <input [(ngModel)]=\"widget.placeholder\" type=\"text\" class=\"form-control\" id=\"Placeholder\"\n           name=\"placeholder\">\n  </div>\n\n  <div class=\"input-group\">\n    <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n      <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\" name=\"formatted\"/> </span>\n  </div>\n\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetTextComponent = (function () {
    function WidgetTextComponent() {
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetTextComponent.prototype, "widget", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetTextComponent);

//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form>\n  <div class=\"form-group\">\n    <label for=\"youtubeName\">Name</label>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"youtubeName\"\n           name=\"widgetName\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtubeText\">Text</label>\n    <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"youtubeText\"\n           name=\"widgetText\" placeholder=\"Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtubeURL\">URL</label>\n    <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"youtubeURL\"\n           name=\"widgetUrl\" placeholder=\"https://youtu.be/123456\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtubeWidth\">Width</label>\n    <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"youtubeWidth\"\n           name=\"widgetWidth\" placeholder=\"\">\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    // userId: string;
    // websiteId: string;
    // pageId: string;
    // widgetId: string;
    // widget;
    function WidgetYoutubeComponent(widgetService, acRoute) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        this.acRoute.params.subscribe(function (params) {
            // this.userId = params['uid'];
            // this.websiteId = params['wid'];
            // this.pageId = params['pid'];
            // this.widgetId = params['wgid'];
            // this.widget = this.widgetService.findWidgetById(this.widgetId);
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetYoutubeComponent.prototype, "widget", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n  <a class=\"navbar-brand\"><b>Widgets</b></a>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n</nav>\n\n<div id=\"widgetContainer\" class=\"container-fluid jy-below-nav\">\n\n  <!--<img class=\"jy-widget-content\" src=\"assets/uploads/2ca04ea2876fa5f99ab92fee84f06eaa\" alt=\"no image\">-->\n\n  <div *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.type\">\n\n      <div *ngSwitchCase='HEADING'>\n        <div class=\"jy-widget\">\n          <div class=\"jy-toolbar\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"handle glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n          <div [ngSwitch]=\"widget.size\">\n            <div *ngSwitchCase='1'><h1>{{widget.text}}</h1></div>\n            <div *ngSwitchCase='2'><h2>{{widget.text}}</h2></div>\n            <div *ngSwitchCase='3'><h3>{{widget.text}}</h3></div>\n            <div *ngSwitchCase='4'><h4>{{widget.text}}</h4></div>\n            <div *ngSwitchCase='5'><h5>{{widget.text}}</h5></div>\n            <div *ngSwitchCase='6'><h6>{{widget.text}}</h6></div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase='YOUTUBE' class=\"youtube-widget\">\n        <div class=\"jy-widget\">\n          <iframe width=\"{{widget.width}}\" [src]=\"widget.url | safeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n          <div class=\"jy-toolbar\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"handle glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase='IMAGE'>\n        <div class=\"jy-widget\">\n          <div class=\"jy-toolbar\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"handle glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n          <img class=\"jy-widget-content\" [src]=\"widget.url | safeUrl\" [style.width]=\"widget.width\">\n        </div>\n      </div>\n\n      <div *ngSwitchCase='HTML'>\n        <div class=\"jy-widget\">\n          <div class=\"jy-toolbar\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <span class=\"\tglyphicon glyphicon-heart-empty\"></span>\n            </a>\n            <span class=\"handle glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n          <div [innerHTML] = \"widget.text | safeHtml\"></div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase='INPUT'>\n        <div class=\"jy-widget\">\n          <div class=\"jy-toolbar\">\n            <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"handle glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                 placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-dark bg-primary navbar-fixed-bottom\">\n\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-play\"></span>\n    </a>\n  </p>\n  <p class=\"navbar-text pull-left jy-nav-left-margin\">\n    <a class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-eye-open\"></span>\n    </a>\n  </p>\n  <p class=\"navbar-text pull-right jy-nav-right-margin\">\n    <a routerLink=\"/profile\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, acRoute) {
        this.widgetService = widgetService;
        this.acRoute = acRoute;
        this.HEADING = 'HEADING';
        this.IMAGE = 'IMAGE';
        this.YOUTUBE = 'YOUTUBE';
        this.HTML = 'HTML';
        this.INPUT = 'INPUT';
        this.indexChange = { start: 0, end: 0 };
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        $('#widgetContainer')
            .sortable({
            axis: 'y',
            handle: '.handle',
            placeholder: 'ui-state-highlight',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                // ui.item.data('start', ui.item.index());
                self.indexChange.start = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                self.indexChange.end = ui.item.index();
                console.log(self.indexChange);
                // console.log(ui.item);
                if (self.indexChange.start !== self.indexChange.end) {
                    self.widgetService.updateWidgetIndex(self.indexChange, self.pageId)
                        .subscribe(function (res) {
                        console.log(res);
                    });
                }
                //   refe.newIndexes.emit({
                //     startIndex: refe.initialIndex,
                //     endIndex: ui.item.index()});
                // }
            }
        })
            .disableSelection();
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetListComponent);

var _a, _b;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe.html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        // return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe.html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe.url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// This code snippet is adapted from
// https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-in-angular-2-without-causing-unsafe-value-exception
// In order to sanitize the src attribute in iframe


var SafeUrlPipe = (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafeUrlPipe;
}());
SafeUrlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safeUrl' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeUrlPipe);

var _a;
//# sourceMappingURL=safe.url.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = '3ca5c52352d4366f7a2e0a3780f807b9';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&sort=interestingness-desc&api_key=API_KEY&text=TEXT';
        this.api = {
            'searchPhotos': this.searchPhotos
        };
    }
    FlickrService.prototype.searchPhotos = function (searchText) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchText);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// injecting service into module
var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            console.log(response);
            return response.json();
        }).catch(function (e) {
            if (e.status === 401) {
                console.log(e);
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Unauthorized');
            }
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.uploadFile = function (formData) {
        return this.http.post(this.baseUrl + '/api/upload', formData).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidgetIndex = function (indexChange, pageId) {
        console.log('update widget index client');
        console.log(indexChange);
        console.log(pageId);
        // this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + indexChange.start + '&final=' + indexChange.end, indexChange)
        return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget', indexChange)
            .map(function (res) {
            console.log('response from server');
            return res.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map