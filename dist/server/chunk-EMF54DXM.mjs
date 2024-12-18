import './polyfills.server.mjs';
import{a as K,b as Q}from"./chunk-TJFXJKMK.mjs";import{a as J}from"./chunk-CDAFQB76.mjs";import{a as H,c as M,d as G,e as U}from"./chunk-Q2SVOJO2.mjs";import"./chunk-SIMPEKYT.mjs";import"./chunk-3LAXRZZC.mjs";import{d as q,e as P}from"./chunk-O4O7F5QG.mjs";import"./chunk-WJ4BIIFC.mjs";import"./chunk-SGRSZR57.mjs";import{p as b}from"./chunk-UJUJTNMG.mjs";import"./chunk-VC7RF3PE.mjs";import{I as Y,Y as $,_ as x,d as F,m as O,n as z,o as V,s as C,v as _}from"./chunk-NONDWBOB.mjs";import{$ as N,Ab as f,Bb as u,Jb as W,Kb as p,Lb as I,Na as i,Oa as l,Rb as B,S as A,Sb as w,Tb as j,Xa as g,aa as E,bb as v,ha as D,ic as h,kb as a,ob as R,pa as m,rb as s,sb as r,tb as d,xb as L}from"./chunk-26VAK23Y.mjs";import"./chunk-AFOT676I.mjs";var S=class e{constructor(n,t,o){this.platformId=n;this._cdr=t;this._router=o;this.isBrowser=_(this.platformId)}isBrowser;collapsed=!1;screenWidth=0;ngOnInit(){}ngAfterViewChecked(){this._cdr.detectChanges()}getBodyClass(){let n="";return this.collapsed&&this.screenWidth>768?n="body-trimmed":this.collapsed&&this.screenWidth<=768&&this.screenWidth>0&&(n="body-md-screen"),n}static \u0275fac=function(t){return new(t||e)(l(m),l(h),l(M))};static \u0275cmp=g({type:e,selectors:[["app-admin-portal"]],inputs:{collapsed:"collapsed",screenWidth:"screenWidth"},decls:4,vars:2,consts:[["o","outlet"],[1,"body",3,"ngClass"]],template:function(t,o){if(t&1&&(s(0,"div",1)(1,"div"),d(2,"router-outlet",null,0),r()()),t&2){let c=W(3);a("ngClass",o.getBodyClass()),i(),a("@fadeAnimation",c.isActivated?c.activatedRoute:"")}},dependencies:[C,O,H,x,K,P,Q],styles:[".body[_ngcontent-%COMP%]{width:calc(100% - 5rem);height:100vh;margin-left:5rem;z-index:0;position:relative;top:0;transition:all .5s ease;padding:3rem}.body-trimmed[_ngcontent-%COMP%]{width:calc(100% - 16.5625rem);margin-left:16.5625rem}.body-md-screen[_ngcontent-%COMP%]{width:calc(100% - 5rem);margin-left:5rem}"],data:{animation:[b]}})};var le=()=>["/home"],ce=e=>[e],de=()=>({exact:!0});function pe(e,n){e&1&&(s(0,"div",14),p(1,"Admin"),r())}function me(e,n){if(e&1){let t=L();s(0,"button",15),f("click",function(){N(t);let c=u();return E(c.closeSideNav())}),d(1,"i",16),r()}}function ge(e,n){if(e&1&&(s(0,"span",22),p(1),r()),e&2){let t=u().$implicit;i(),I(t.label)}}function ve(e,n){if(e&1&&(s(0,"span",23),p(1),r()),e&2){let t=u().$implicit,o=u();a("ngClass",o.collapsed?"":"fadeIn"),i(),I(t.label)}}function fe(e,n){if(e&1&&(s(0,"li",17)(1,"a",18),d(2,"i",19),v(3,ge,2,1,"span",20)(4,ve,2,2,"span",21),r()()),e&2){let t=n.$implicit,o=u();i(),a("routerLink",j(6,ce,t.routerLink))("routerLinkActiveOptions",w(8,de)),i(),R(t.icon),i(),a("ngIf",o.collapsed),i(),a("ngIf",!o.collapsed)}}function ue(e,n){e&1&&(s(0,"span",24),p(1,"Home"),r())}function he(e,n){e&1&&(s(0,"span",25),p(1,"Home"),r())}function Ce(e,n){e&1&&(s(0,"span",25),p(1,"Logout"),r())}var y=class e{constructor(n,t,o,c){this.platformId=n;this._authService=t;this._cdr=o;this._router=c;this.isBrowser=_(this.platformId)}onToggleSideNav=new D;isBrowser;isLoggingOut=!1;isLoggedOut=!0;isAuthenticated=!1;userName;userType;token;collapsed=!1;screenWidth=0;navData=[{routerLink:"dashboard",icon:"pi pi-chart-bar",label:"Dashboard"},{routerLink:"merchants",icon:"pi pi-users",label:"Merchants"},{routerLink:"stores",icon:"pi pi-shop",label:"Stores"},{routerLink:"products",icon:"pi pi-box",label:"Products"},{routerLink:"messages",icon:"pi pi-inbox",label:"Messages"},{routerLink:"settings",icon:"pi pi-cog",label:"Settings"}];ngOnInit(){this.isBrowser&&(this.screenWidth=window.innerWidth)}ngAfterViewChecked(){this._cdr.detectChanges()}toggleCollapse(){this.collapsed=!this.collapsed,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}closeSideNav(){this.collapsed=!1,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}logout(){this.isLoggingOut=!0,this._authService.onLogout().subscribe(()=>{this.isLoggedOut=!0,this.isLoggingOut=!1},n=>{console.error("Error logging out: ",n),this.isLoggingOut=!1})}static \u0275fac=function(t){return new(t||e)(l(m),l(J),l(h),l(M))};static \u0275cmp=g({type:e,selectors:[["app-sidenav-admin"]],outputs:{onToggleSideNav:"onToggleSideNav"},decls:16,vars:13,consts:[[1,"sidenav","fadeIn",3,"ngClass"],[1,"logo-container"],[1,"logo",3,"click"],["class","logo-text",4,"ngIf"],["class","btn-close",3,"click",4,"ngIf"],[1,"sidenav-nav"],["class","sidenav-nav-item",4,"ngFor","ngForOf"],[1,"sidenav-nav-item","cursor-pointer",3,"routerLink"],[1,"sidenav-nav-link"],[1,"sidenav-link-icon","pi","pi-home"],["class","sidenav-link-text","style","text-decoration: none;",4,"ngIf"],["class","floating-label",4,"ngIf"],[1,"logout-btn"],["pButton","","icon","pi pi-sign-out",1,"",3,"click","ngClass","label","loading"],[1,"logo-text"],[1,"btn-close",3,"click"],[1,"pi","pi-times"],[1,"sidenav-nav-item"],["routerLinkActive","active",1,"sidenav-nav-link",3,"routerLink","routerLinkActiveOptions"],[1,"sidenav-link-icon"],["class","sidenav-link-text",4,"ngIf"],["class","floating-label",3,"ngClass",4,"ngIf"],[1,"sidenav-link-text"],[1,"floating-label",3,"ngClass"],[1,"sidenav-link-text",2,"text-decoration","none"],[1,"floating-label"]],template:function(t,o){t&1&&(s(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return o.toggleCollapse()}),p(3,"A"),r(),v(4,pe,2,0,"div",3)(5,me,2,0,"button",4),r(),s(6,"ul",5),v(7,fe,5,9,"li",6),s(8,"li",7)(9,"a",8),d(10,"i",9),v(11,ue,2,0,"span",10)(12,he,2,0,"span",11),r()(),s(13,"div",12)(14,"button",13),f("click",function(){return o.logout()}),r(),v(15,Ce,2,0,"span",11),r()()()),t&2&&(a("ngClass",o.collapsed?"sidenav-collapsed":"")("ngClass",o.isLoggedOut?"fadeOut":""),i(4),a("ngIf",o.collapsed),i(),a("ngIf",o.collapsed),i(2),a("ngForOf",o.navData),i(),a("routerLink",w(12,le)),i(3),a("ngIf",o.collapsed),i(),a("ngIf",!o.collapsed),i(2),a("ngClass",o.collapsed?"logout-btn-not-collapsed ":"logout-btn-collapsed")("label",o.collapsed?"Logout":"")("loading",o.isLoggingOut),i(),a("ngIf",!o.collapsed))},dependencies:[C,O,z,V,G,U,x,$],styles:[".sidenav[_ngcontent-%COMP%]{transform:all .5s ease;position:fixed;z-index:1;top:0;width:5rem;height:100vh;box-shadow:.063rem 0 2px 0 var(--primary-color);transition:all .3s ease-in-out}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.938rem .938rem 0}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background:var(--primary-color);text-align:center;color:var(--primary-color-text);width:3rem;min-width:3rem;border-radius:.313rem;padding:.313rem;font-size:24px;font-weight:900;cursor:pointer;border:none}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:24px;font-weight:700;color:var(--primary-color)}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;width:2rem;height:2rem;border-radius:50%;background-color:transparent;border:none}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]     i{color:var(--primary-color-text)!important;font-size:24px}.sidenav-collapsed[_ngcontent-%COMP%]{width:16.5625rem}.sidenav-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;display:flex;flex-direction:column;align-items:center;height:calc(100% - 3.65rem)}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]{width:100%;margin-bottom:.625rem;position:relative}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:3rem;color:var(--primary-color);text-decoration:none;transition:all .3s ease-in-out;border-radius:12px}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center;color:var(--primary-color)}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-text[_ngcontent-%COMP%]{margin-left:1.5rem}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%]{display:none}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--primary-color-text)}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{color:var(--primary-color-text)}.active[_ngcontent-%COMP%]{border:2px solid;background-color:var(--surface-card);display:flex;border:2px solid var(--primary-color);align-items:center}.sidenav[_ngcontent-%COMP%]:not(.sidenav-collapsed)   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%]{display:none}.sidenav[_ngcontent-%COMP%]:not(.sidenav-collapsed)   .sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%]{display:block;position:absolute;left:100%;top:50%;transform:translateY(-50%);margin-left:10px;background-color:var(--primary-color);color:var(--primary-color-text);padding:5px 10px;border-radius:4px;white-space:nowrap;z-index:10;box-shadow:0 2px 5px #0003;animation:_ngcontent-%COMP%_fadeIn .2s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-50%) translate(-10px)}to{opacity:1;transform:translateY(-50%) translate(0)}}.logout-btn[_ngcontent-%COMP%]{transition:.3s ease-in-out;border-radius:12px;height:3rem;position:absolute;bottom:40px;margin-left:.5rem;width:90%}.logout-btn[_ngcontent-%COMP%]   .floating-label[_ngcontent-%COMP%]{display:none}.logout-btn[_ngcontent-%COMP%]:hover   .floating-label[_ngcontent-%COMP%]{display:block;position:absolute;left:100%;top:50%;transform:translateY(-50%);margin-left:10px;background-color:var(--primary-color);color:var(--primary-color-text);padding:5px 10px;border-radius:4px;white-space:nowrap;z-index:10;box-shadow:0 2px 5px #0003;animation:_ngcontent-%COMP%_fadeIn .2s ease-in-out}.logout-btn-not-collapsed[_ngcontent-%COMP%]{transition:.3s ease-in-out;border-radius:12px;height:3rem;background:transparent;color:var(--primary-color);border-color:transparent;margin-left:.5rem;width:90%}.logout-btn-not-collapsed[_ngcontent-%COMP%]:hover{background-color:var(--red);color:#fff}.p-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{flex:none!important;margin-left:28px!important;font-size:15px!important;font-weight:500!important}.logout-btn-collapsed[_ngcontent-%COMP%]{transition:.3s ease-in-out;border-radius:12px;height:3rem;margin-left:.5rem;width:66%;background:transparent;color:var(--primary-color);border:2px solid transparent}.logout-btn-collapsed[_ngcontent-%COMP%]:hover{background:var(--red);border:var(--primary-color);color:#fff}"],data:{animation:[b]}})};var k=class e{constructor(n,t){this.platformId=n;this._cdr=t;this.isBrowser=_(this.platformId)}isBrowser;#e=A(F);isSideNavCollapsed=!1;screenWidth=0;ngOnInit(){if(this.isBrowser){let n=localStorage.getItem("theme"),t=this.#e.getElementById("app-theme");n?n==="light"?t.href="theme-light.css":t.href="theme-dark.css":(t.href="theme-light.css",localStorage.setItem("theme","light")),this._cdr.detectChanges()}}onToggleSideNav(n){this.screenWidth=n.screenWidth,this.isSideNavCollapsed=n.collapsed}static \u0275fac=function(t){return new(t||e)(l(m),l(h))};static \u0275cmp=g({type:e,selectors:[["app-admin"]],features:[B([Y])],decls:3,vars:2,consts:[[3,"onToggleSideNav"],[3,"collapsed","screenWidth"]],template:function(t,o){t&1&&(s(0,"app-sidenav-admin",0),f("onToggleSideNav",function(ae){return o.onToggleSideNav(ae)}),r(),d(1,"app-admin-portal",1)(2,"p-toast")),t&2&&(i(),a("collapsed",o.isSideNavCollapsed)("screenWidth",o.screenWidth))},dependencies:[S,y,C,P,q],styles:[".body[_ngcontent-%COMP%]{width:calc(100% - 5rem);height:100vh;margin-left:5rem;z-index:0;position:relative;top:0;transition:all .5s ease;padding:3rem}.body-trimmed[_ngcontent-%COMP%]{width:calc(100% - 16.5625rem);margin-left:16.5625rem}.body-md-screen[_ngcontent-%COMP%]{width:calc(100% - 5rem);margin-left:5rem}"],data:{animation:[b]}})};var T="dashboard",ee="stores",te="products",ne="merchants",oe="messages",ie="settings";var mt=[{path:"",redirectTo:T,pathMatch:"full"},{path:"",component:k,children:[{path:T,loadComponent:()=>import("./chunk-AA2MOZAG.mjs").then(e=>e.DashboardComponent)},{path:ee,loadComponent:()=>import("./chunk-3LX3DERI.mjs").then(e=>e.StoresComponent)},{path:ne,loadComponent:()=>import("./chunk-HRFIQOU4.mjs").then(e=>e.MerchantsComponent)},{path:te,loadComponent:()=>import("./chunk-35M6T632.mjs").then(e=>e.ProductsComponent)},{path:oe,loadComponent:()=>import("./chunk-PWT73FSB.mjs").then(e=>e.MessagesComponent)},{path:ie,loadComponent:()=>import("./chunk-3O6MYQAN.mjs").then(e=>e.SettingsComponent)}]}];export{mt as ADMIN_ROUTES};
