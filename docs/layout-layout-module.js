(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/screen1"]; };
const _c2 = function () { return ["/screen2"]; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.showMenu = '';
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 18, consts: [["id", "sidebar"], ["mat-list-item", "", 3, "routerLinkActive", "routerLink"], [1, "sidenav-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "Dashboard"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "About POP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "Contact"), " ");
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["#sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.nested-menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none;\n  height: 0;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  #sidebar[_ngcontent-%COMP%] {\n    left: -250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXNod2FyeWF0ZWVndWxsYS9MSVNUTy9wb3AtZGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7QUNFUjtBRERRO0VBSUksY0FBQTtBQ0FaO0FESFk7RUFDSSxrQkFBQTtBQ0toQjtBREVJO0VBQ0kscUJBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDUjtBREVRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNBWjtBREVnQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQXBCO0FETUE7RUFDSTtJQUNJLFlBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAtbXMtb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC5tYXQtbmF2LWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuLm5lc3RlZC1tZW51IHtcbiAgICAubmVzdGVkIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgICAuc3VibWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgJiAuZXhwYW5kIHtcbiAgICAgICAgJi5zdWJtZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgbGVmdDogLTI1MHB4O1xuICAgIH1cbn1cbiIsIiNzaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgei1pbmRleDogOTk5O1xuICAtbXMtb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3QgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3NpZGViYXIgLm1hdC1uYXYtbGlzdCBhIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm5lc3RlZC1tZW51IC5uZXN0ZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubmVzdGVkLW1lbnUgLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZC5zdWJtZW51IGxpIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI3NpZGViYXIge1xuICAgIGxlZnQ6IC0yNTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









class TopnavComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }
    changeLang(language) {
        this.translate.use(language);
    }
}
TopnavComponent.ɵfac = function TopnavComponent_Factory(t) { return new (t || TopnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
TopnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopnavComponent, selectors: [["app-topnav"]], decls: 11, vars: 0, consts: [["color", "primary", 1, "fix-nav"], ["type", "button", "mat-icon-button", "", 1, "visible-md", 3, "click"], ["aria-label", "Side nav toggle icon"], ["src", "assets/images/TAM-LogoBox.png", "width", "80", "height", "80"], [1, "nav-brand"], [1, "nav-spacer"], ["mat-icon-button", "", 3, "click"]], template: function TopnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_1_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " POP DASHBOARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_8_listener() { return ctx.onLoggedout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n}\n\n.nav-brand[_ngcontent-%COMP%] {\n  width: 215px;\n}\n\n.topnav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  color: #fff;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.visible-md[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 992px) {\n  .visible-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-brand[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #500000;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXNod2FyeWF0ZWVndWxsYS9MSVNUTy9wb3AtZGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRERBO0VBQ0k7SUFDSSxjQUFBO0VDSU47QUFDRjs7QURGQTtFQUNJO0lBQ0ksY0FBQTtFQ0lOOztFREZFO0lBQ0ksV0FBQTtFQ0tOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLGFBQUE7RUNLTjtBQUNGOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuLm5hdi1icmFuZCB7XG4gICAgd2lkdGg6IDIxNXB4O1xuICAgIFxufVxuLnRvcG5hdi1pY29uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdi1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudmlzaWJsZS1tZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnZpc2libGUtc20ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5hdi1icmFuZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhpZGRlbi1zbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICM1MDAwMDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5uYXYtYnJhbmQge1xuICB3aWR0aDogMjE1cHg7XG59XG5cbi50b3BuYXYtaWNvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi52aXNpYmxlLW1kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc2libGUtc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXYtYnJhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlkZGVuLXNtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjNTAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topnav',
                templateUrl: './topnav.component.html',
                styleUrls: ['./topnav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screen2/screen2.component */ "./src/app/layout/screen2/screen2.component.ts");






const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~login-login-module~screen1-screen1-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'screen1',
                loadChildren: () => Promise.all(/*! import() | screen1-screen1-module */[__webpack_require__.e("default~dashboard-dashboard-module~login-login-module~screen1-screen1-module"), __webpack_require__.e("screen1-screen1-module")]).then(__webpack_require__.bind(null, /*! ./screen1/screen1.module */ "./src/app/layout/screen1/screen1.module.ts")).then(m => m.Screen1Module)
            },
            {
                path: 'screen2',
                component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_3__["Screen2Component"]
            }
        ]
    }
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class LayoutComponent {
    constructor() { }
    ngOnInit() { }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "main-container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_1__["TopnavComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/material/material.module */ "./src/app/shared/modules/material/material.module.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screen2/screen2.component */ "./src/app/layout/screen2/screen2.component.ts");











class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
            _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_screen2_screen2_component__WEBPACK_IMPORTED_MODULE_9__["Screen2Component"],
        _layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
        _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                    _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
                ],
                declarations: [
                    _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_9__["Screen2Component"],
                    _layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/screen1"]; };
const _c2 = function () { return ["/screen2"]; };
class NavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 20, vars: 16, consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", 3, "routerLinkActive", "routerLink"], [1, "sidenav-icon"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SB Admin Marerial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Dashbard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Screen1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Screen2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx.isHandset).matches ? "over" : "side")("opened", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, ctx.isHandset).matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", ctx.isHandset ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\n.topnav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  color: #fff;\n}\n\n.sidenav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 0 10px;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXNod2FyeWF0ZWVndWxsYS9MSVNUTy9wb3AtZGFzaGJvYXJkL3NyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4udG9wbmF2LWljb24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ubmF2LXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi8vIC5maXgtbmF2IHtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDI1MHB4O1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gfVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi50b3BuYXYtaWNvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zaWRlbmF2LWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/screen2/screen2.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/screen2/screen2.component.ts ***!
  \*****************************************************/
/*! exports provided: Screen2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen2Component", function() { return Screen2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Screen2Component {
    constructor() { }
    ngOnInit() {
    }
}
Screen2Component.ɵfac = function Screen2Component_Factory(t) { return new (t || Screen2Component)(); };
Screen2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Screen2Component, selectors: [["app-screen2"]], decls: 2, vars: 0, template: function Screen2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " screen2 works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zY3JlZW4yL3NjcmVlbjIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Screen2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-screen2',
                templateUrl: './screen2.component.html',
                styleUrls: ['./screen2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map