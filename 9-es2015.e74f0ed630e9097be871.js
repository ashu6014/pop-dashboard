(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Tx//":function(n,t,e){"use strict";e.r(t),e.d(t,"LayoutModule",(function(){return v}));var o=e("ofXK"),i=e("sYmb"),a=e("W/RB"),c=e("tyNb"),s=e("fXoL"),r=e("/t3+"),d=e("bTqV"),l=e("NFeN");let b=(()=>{class n{constructor(n,t){this.router=n,this.translate=t,this.router.events.subscribe(n=>{n instanceof c.a&&window.innerWidth<=992&&this.isToggled()&&this.toggleSidebar()})}ngOnInit(){this.pushRightClass="push-right"}isToggled(){return document.querySelector("body").classList.contains(this.pushRightClass)}toggleSidebar(){document.querySelector("body").classList.toggle(this.pushRightClass)}onLoggedout(){localStorage.removeItem("isLoggedin"),this.router.navigate(["/login"])}changeLang(n){this.translate.use(n)}}return n.\u0275fac=function(t){return new(t||n)(s.Qb(c.b),s.Qb(i.d))},n.\u0275cmp=s.Kb({type:n,selectors:[["app-topnav"]],decls:11,vars:0,consts:[["color","primary",1,"fix-nav"],["type","button","mat-icon-button","",1,"visible-md",3,"click"],["aria-label","Side nav toggle icon"],["src","assets/images/TAM-LogoBox.png","width","80","height","80"],[1,"nav-brand"],[1,"nav-spacer"],["mat-icon-button","",3,"click"]],template:function(n,t){1&n&&(s.Wb(0,"mat-toolbar",0),s.Wb(1,"button",1),s.ec("click",(function(){return t.toggleSidebar()})),s.Wb(2,"mat-icon",2),s.Fc(3,"menu"),s.Vb(),s.Vb(),s.Rb(4,"img",3),s.Wb(5,"div",4),s.Fc(6," POP DASHBOARD "),s.Vb(),s.Rb(7,"span",5),s.Wb(8,"button",6),s.ec("click",(function(){return t.onLoggedout()})),s.Wb(9,"mat-icon"),s.Fc(10,"exit_to_app"),s.Vb(),s.Vb(),s.Vb())},directives:[r.a,d.a,l.a],styles:["[_nghost-%COMP%]{display:block;position:fixed;left:0;right:0;top:0;z-index:1000}.nav-brand[_ngcontent-%COMP%]{width:215px}.topnav-icon[_ngcontent-%COMP%]{text-decoration:none;display:flex;color:#fff}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.visible-md[_ngcontent-%COMP%], .visible-sm[_ngcontent-%COMP%]{display:none}@media screen and (max-width:992px){.visible-md[_ngcontent-%COMP%]{display:block}}@media screen and (max-width:768px){.visible-sm[_ngcontent-%COMP%]{display:block}.nav-brand[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:768px){.hidden-sm[_ngcontent-%COMP%]{display:none}}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#500000;color:#fff}"]}),n})();var u=e("MutI");const p=function(){return["/dashboard"]},g=function(){return["/screen1"]},m=function(){return["/screen2"]};let h=(()=>{class n{constructor(){}ngOnInit(){this.showMenu=""}addExpandClass(n){this.showMenu=n===this.showMenu?"0":n}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Kb({type:n,selectors:[["app-sidebar"]],decls:17,vars:18,consts:[["id","sidebar"],["mat-list-item","",3,"routerLinkActive","routerLink"],[1,"sidenav-icon"]],template:function(n,t){1&n&&(s.Wb(0,"div",0),s.Wb(1,"mat-nav-list"),s.Wb(2,"a",1),s.Wb(3,"mat-icon",2),s.Fc(4,"dashboard"),s.Vb(),s.Fc(5),s.jc(6,"translate"),s.Vb(),s.Wb(7,"a",1),s.Wb(8,"mat-icon",2),s.Fc(9,"info"),s.Vb(),s.Fc(10),s.jc(11,"translate"),s.Vb(),s.Wb(12,"a",1),s.Wb(13,"mat-icon",2),s.Fc(14,"people"),s.Vb(),s.Fc(15),s.jc(16,"translate"),s.Vb(),s.Vb(),s.Vb()),2&n&&(s.Cb(2),s.nc("routerLinkActive","active")("routerLink",s.oc(15,p)),s.Cb(3),s.Hc(" ",s.kc(6,9,"Dashboard")," "),s.Cb(2),s.nc("routerLinkActive","active")("routerLink",s.oc(16,g)),s.Cb(3),s.Hc(" ",s.kc(11,11,"About POP")," "),s.Cb(2),s.nc("routerLinkActive","active")("routerLink",s.oc(17,m)),s.Cb(3),s.Hc(" ",s.kc(16,13,"Contact")," "))},directives:[u.e,u.c,c.d,c.c,l.a],pipes:[i.c],styles:["#sidebar[_ngcontent-%COMP%]{width:250px;position:fixed;top:56px;bottom:0;background:#fff;box-shadow:3px 0 6px rgba(0,0,0,.24);z-index:999;-ms-overflow-y:auto;overflow-y:auto}#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]{width:100%}#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:15px}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto;margin:0}.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;display:block}@media screen and (max-width:992px){#sidebar[_ngcontent-%COMP%]{left:-250px}}"]}),n})();const f=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Kb({type:n,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"main-container"]],template:function(n,t){1&n&&(s.Rb(0,"app-topnav"),s.Rb(1,"app-sidebar"),s.Wb(2,"div",0),s.Rb(3,"router-outlet"),s.Vb())},directives:[b,h,c.f],styles:[""]}),n})(),children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:()=>Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"GZeB")).then(n=>n.DashboardModule)},{path:"screen1",loadChildren:()=>Promise.all([e.e(1),e.e(10)]).then(e.bind(null,"F4X2")).then(n=>n.Screen1Module)},{path:"screen2",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Kb({type:n,selectors:[["app-screen2"]],decls:2,vars:0,template:function(n,t){1&n&&(s.Wb(0,"p"),s.Fc(1," screen2 works!\n"),s.Vb())},styles:[""]}),n})()}]}];let C=(()=>{class n{}return n.\u0275mod=s.Ob({type:n}),n.\u0275inj=s.Nb({factory:function(t){return new(t||n)},imports:[[c.e.forChild(f)],c.e]}),n})(),v=(()=>{class n{}return n.\u0275mod=s.Ob({type:n}),n.\u0275inj=s.Nb({factory:function(t){return new(t||n)},imports:[[o.c,C,a.a,i.b]]}),n})()}}]);