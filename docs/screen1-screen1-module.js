(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screen1-screen1-module"],{

/***/ "./src/app/layout/screen1/screen1-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/screen1/screen1-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: Screen1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1RoutingModule", function() { return Screen1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen1.component */ "./src/app/layout/screen1/screen1.component.ts");





const routes = [
    {
        path: '',
        component: _screen1_component__WEBPACK_IMPORTED_MODULE_2__["Screen1Component"]
    }
];
class Screen1RoutingModule {
}
Screen1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Screen1RoutingModule });
Screen1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Screen1RoutingModule_Factory(t) { return new (t || Screen1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Screen1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Screen1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/screen1/screen1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/screen1/screen1.component.ts ***!
  \*****************************************************/
/*! exports provided: Screen1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1Component", function() { return Screen1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Screen1Component {
    constructor() { }
    ngOnInit() {
    }
}
Screen1Component.ɵfac = function Screen1Component_Factory(t) { return new (t || Screen1Component)(); };
Screen1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Screen1Component, selectors: [["app-screen1"]], decls: 2, vars: 0, template: function Screen1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " screen1 works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zY3JlZW4xL3NjcmVlbjEuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Screen1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-screen1',
                templateUrl: './screen1.component.html',
                styleUrls: ['./screen1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/screen1/screen1.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/screen1/screen1.module.ts ***!
  \**************************************************/
/*! exports provided: Screen1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen1Module", function() { return Screen1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen1.component */ "./src/app/layout/screen1/screen1.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen1-routing.module */ "./src/app/layout/screen1/screen1-routing.module.ts");







class Screen1Module {
}
Screen1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Screen1Module });
Screen1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Screen1Module_Factory(t) { return new (t || Screen1Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Screen1RoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Screen1Module, { declarations: [_screen1_component__WEBPACK_IMPORTED_MODULE_2__["Screen1Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Screen1RoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Screen1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_screen1_component__WEBPACK_IMPORTED_MODULE_2__["Screen1Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _screen1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Screen1RoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"].withConfig({ addFlexToParent: false })
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=screen1-screen1-module.js.map