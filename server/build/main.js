webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_meeting__ = __webpack_require__(154);
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
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePage = /** @class */ (function () {
    function CreatePage(navCtrl, navParams, meetingService, formBuilder, base64ToGallery) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meetingService = meetingService;
        this.formBuilder = formBuilder;
        this.base64ToGallery = base64ToGallery;
        this.meetingDetailsFG = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            time: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    CreatePage.prototype.createMeeting = function () {
        //alert(this.meetingDetailsFG.value);
        console.log(this.meetingDetailsFG.value);
        this.meetingService.create(this.meetingDetailsFG.value);
        var base64Data = 'iVBORw0KGgoAAAANSUhEUgAAAVYAAAFWAQAAAAAa1IguAAADGUlEQVR4nO2aXW7EMAiEkThAjpSr+0g5gCVqZsCb3W2lPkOiVZrEX/qAYPhxxP59THnYh33Ydqz4cep1rrPZmCJ2iRxrZaiZXr6sDdj11wDKMXA78oms99b/IFOfvfzBAtd5wn54z6a/OmjLPqybx7jovPvUYW7FfmxqhpttHu5E69yIRcTEeUWM/yAnkref8VaT3Zr6x+9X/S3I8mDE0Flop6UlIi+gPosYgqw6yBgy1xWDvrofaQNWYbBlrUUtO81wpbU0hLfHtlll1hVU9kvItMfgBbRE/LoBC9fw7Jolp+EaoA0ISQt2rYdtRGLxkomXqLXIt/XZbbApoSgInfAgXNzirS7LepPd2ER6oaIwwRoDqwFLJBXULURNRUHq+bYLe+w0K1gU5hkGE+vQDixNghjyZyg0IsmIt+knK6/yrCKT7KoTixSVkZ71pqlV2ZATOFHazCXW0Ju6C911py473U08XKLOgqgobIlyDK1qA5bVJdzHnYVF1m1WIexLyrPsQYGYRcsuuxuD75g2YDV/rLMs+4+5x9vWgp2owRUdiaC40EiqHk/MMNaADbNBRZBsgVsUoe82K81eETRbXznTtRzgvffoZVmYijl2cNLPqpxZl8HUgd0xhHIb9SaSLXs1Nqxf8VaTNUvDYJgXicVGjrKsBcvBTAhnVBbK69CVl+8UZmOge3BigTI87UfK3mZ4ZdnY1aFtMqNymEezaQ+W1bfyW4mUkG0tSMuOocpsTmjOGO6a2R7xole7+U5llrZhQ5a+M2KgG19MbJuVZplaD+x1oO5GneVamzs/og3YPc9mBarZkLHg+szHlVmmU9kpxXJ/mNuD+hlvRdnY8jqzBYmUwleVituAzb78zDSLlIsNMYFD8Xl5lofk9rii3oScRK+mL02tzFJC8E3EyAE/pptsUNKJyrNuEggnWdqMRYe8yvAGLDcA40PLkyY03jLf3r5B7sBCUwclVrENaKEo1ojN3kvie8N4yD2fFmzGEIKG+iEsPNOE31pSkI2giT2uwe8FMtVgT+zz+9Sa7D+Ph33Yh23G/gBOwdIIQXPhzgAAAABJRU5ErkJggg==';
        this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img', mediaScanner: true }).then(function (res) { return console.log('Saved image to gallery ', res); }, function (err) { return console.log('Error saving image to gallery ', err); });
    };
    CreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create',template:/*ion-inline-start:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/create/create.html"*/'<!--\n  Generated template for the CreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create New Meeting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="../../assets/imgs/company-3382518_640.jpg"/>\n  <form [formGroup]="meetingDetailsFG" (ngSubmit)="createMeeting()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Name:</ion-label>\n        <ion-input type="text" formControlName="name" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Location:</ion-label>\n        <ion-input type="text" formControlName="location" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date:</ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" formControlName="date" required></ion-datetime>\n        <!-- <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime> -->\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Time:</ion-label>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="time" required></ion-datetime>\n      </ion-item>\n    </ion-list>\n\n\n    <div padding>\n        <button ion-button color="primary" block [disabled]="!meetingDetailsFG.valid">Save</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/create/create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_meeting__["a" /* MeetingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */]])
    ], CreatePage);
    return CreatePage;
}());

//# sourceMappingURL=create.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create/create.module": [
		278,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this._meetingURL = 'http://ahmni01-i9904.ca.com:31112/function/createmeeting';
        //private _meetingURL: string = 'http://10.134.37.238:5000/login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
        });
    }
    MeetingService.prototype.create = function (body) {
        //let options = new RequestOptions({ headers:this.headers});
        var bodyJSON = {
            "name": "Serverless with Open Sourceuw, Dev/Mobile showcased in this session, please attend",
            "location": "Small Audi",
            "date": "Sep2-2018",
            "time": "1 PM"
        };
        return this.http.post(this._meetingURL, bodyJSON, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MeetingService.prototype.handleError = function (error) {
        console.error('Error Occurred : ', error);
        return Promise.reject(error.message || error);
    };
    MeetingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MeetingService);
    return MeetingService;
}());

//# sourceMappingURL=meeting.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_create__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__create_create__["a" /* CreatePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Attend" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Create" tabIcon="add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, barcodeScanner, formBuilder, platform, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.QRCode = null;
        this.isAndroid = false;
        this.showSettings = false;
        this.isAndroid = platform.is('android');
        this.userDetailsFG = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            userID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.storage.get('name').then(function (val) {
            _this.name = val;
            console.log('From Storage: Your name is: ', val);
        });
        this.storage.get('userID').then(function (val) {
            _this.userID = val;
            console.log('From Storage: Your userid is:', val);
        });
    }
    HomePage.prototype.scanQRCode = function () {
        var _this = this;
        if (!this.name && !this.userID) {
            this.showToast('Please set the user details...', 5000);
            this.toggleShowSettings();
            return;
        }
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.QRCode = barcodeData.text;
            if (_this.QRCode)
                _this.showToast('QR Code Scanned successfully', 2000);
            console.log('Scanned Barcode is :', _this.QRCode);
        }).catch(function (err) {
            console.log('Error', err);
            _this.showToast('Failed to scan QR Code, Please try again!', 5000);
        });
    };
    HomePage.prototype.toggleShowSettings = function () {
        this.showSettings = (this.showSettings == false) ? true : false;
    };
    HomePage.prototype.saveUser = function () {
        console.log(this.userDetailsFG.value);
        this.showSettings = false;
        this.showToast('Details saved successfully', 3000);
        var userObject = this.userDetailsFG.value;
        if (userObject.name && userObject.userID) {
            this.storage.set('name', userObject.name);
            this.storage.set('userID', userObject.userID);
            console.log('Stored: userObject.name : ' + userObject.name);
            console.log('Stored: userObject.userID: ' + userObject.userID);
        }
    };
    HomePage.prototype.showToast = function (message, timeInMilliseconds) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: timeInMilliseconds
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'\'">\n    <ion-title>CA Learning</ion-title>\n    <ion-buttons start>\n      <button ion-button color="danger" icon-only showWhen="ios">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n      <button ion-button icon-only hideWhen="ios" (click)=toggleShowSettings()>\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-content padding>\n\n    <ion-card>\n      <ion-card-content *ngIf="showSettings">\n        <ion-card-header>\n          Enter your details:\n        </ion-card-header>\n        <ion-card-content>\n          <form [formGroup]="userDetailsFG" (ngSubmit)="saveUser()">\n            <ion-list>\n              <ion-item>\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text" formControlName="name" [(ngModel)]="name" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>UserID</ion-label>\n                <ion-input type="text" formControlName="userID" [(ngModel)]="userID" required></ion-input>\n              </ion-item>\n            </ion-list>\n            <div padding>\n              <button ion-button color="primary" block [disabled]="!userDetailsFG.valid">Save</button>\n            </div>\n          </form>\n        </ion-card-content>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card color="secondary" *ngIf="QRCode">\n      <img src="../../assets/imgs/check-3442527_640.png" />\n      <ion-card-content>\n        <ion-card-header>\n          All set, Please proceed!\n        </ion-card-header>\n        <ion-item text-wrap>\n          Meeting ID: {{ QRCode }}\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <img src="../../assets/imgs/hands-1167612_640.jpg" />\n      <ion-card-header text-wrap>\n        To attend meeting, Scan the QR Code of your meeting.\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          <button ion-button full icon-left (click)=scanQRCode() color="secondary">\n            <ion-icon name="qr-scanner"></ion-icon>Scan</button>\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n\n\n  </ion-content>\n'/*ion-inline-end:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_create__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_meeting__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64_to_gallery__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create/create.module#CreatePageModule', name: 'CreatePage', segment: 'create', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_create__["a" /* CreatePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__services_meeting__["a" /* MeetingService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ahmni01/learn/attendance_recorder/mobile/ca_learning/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map