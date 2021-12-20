(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    90795:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      93721);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    77641:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      76820);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      90795);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      93721);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    93721:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      21339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      54972);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(auth) {
          _classCallCheck(this, LoginPage);

          this.auth = auth;
          this.login1 = {
            email: '',
            password: ''
          };
          this.auth.Hello();
        }

        _createClass(LoginPage, [{
          key: "run",
          value: function run() {
            console.log(this.login1);
            this.signIn();
          }
        }, {
          key: "signIn",
          value: function signIn() {
            this.auth.signIn(this.login1.email, this.login1.password);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    21339:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  position: relative;\n  top: 25%;\n  padding: 0 10px 0 10px;\n}\n\n.header {\n  position: relative;\n  top: 15%;\n  text-align: center;\n}\n\n.body {\n  color: #497cda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBRUUsY0FBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI1JTtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICB9XG4gIC5oZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYm9keXtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2staW1nLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIGNvbG9yOiByZ2IoNzMsIDEyNCwgMjE4KTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    76770:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" class=\"body\">\n  <h3 class=\"header\">Login </h3>\n  <div class=\"main\">\n    <!-- <ion-card>\n      <ion-item>\n        <ion-label position=\"floating\"> Email </ion-label>\n        <ion-input placeholder=\"Enter Email\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-activated\">\n        <ion-label position=\"floating\"> Password </ion-label>\n        <ion-input placeholder=\"Enter Password\" type=\"password\"></ion-input>\n      </ion-item>\n    \n    </ion-card> -->\n    <br>\n    <form [formGroup]=\"login\" >\n<ion-item>\n        <ion-label position=\"floating\"> Email </ion-label>\n        <ion-input placeholder=\"Enter Email\" [(ngModel)]=\"login1.email\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-activated\">\n        <ion-label position=\"floating\"> Password </ion-label>\n        <ion-input placeholder=\"Enter Password\" type=\"password\" [(ngModel)]=\"login1.password\" ></ion-input>\n      </ion-item>\n    </form>\n    <ion-button expand=\"block\" fill=\"outline\" (click)=\"run()\">Sign In</ion-button>\n    <p>Don't have an account, click <a [routerLink]=\"['/register']\">here</a>.</p>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map